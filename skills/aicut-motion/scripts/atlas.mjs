#!/usr/bin/env node
/**
 * The 86 styles, as commands — so a session does not read 86 folders by hand to find one.
 *
 *   node scripts/atlas.mjs --list                 every style, one line each
 *   node scripts/atlas.mjs --list --family Painterly   one family only
 *   node scripts/atlas.mjs --id 26                one style: its style.json, its code, its cover
 *   node scripts/atlas.mjs --verify               that all 86 are whole (poster, style.json, code)
 *   node scripts/atlas.mjs --pick 26,32,2         copy those covers into the project, for the pick card
 *   node scripts/atlas.mjs --pick 26,32,2 --into assets/style-pick
 *
 * `--pick` writes into `<cwd>/assets/style-pick/` by default and prints, for each, the path to give the ask card as
 * `picture` (a path inside the project). Nothing else here writes anything.
 *
 * To see one play instead of reading it: open `scripts/atlas-viewer.html` in a browser (`?id=26` picks one).
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const HERE = import.meta.dirname;
const ATLAS = resolve(HERE, '..', 'assets', 'atlas', 'styles');
const INDEX = resolve(HERE, '..', 'references', 'style-index.json');

/** Every style, by folder, in id order. */
function styles() {
  const index = JSON.parse(readFileSync(INDEX, 'utf8'));
  return index.map((one) => ({ ...one, at: join(ATLAS, one.folder) }));
}

const args = process.argv.slice(2);
const flag = (name) => {
  const at = args.indexOf(name);
  return at >= 0 ? (args[at + 1] && !args[at + 1].startsWith('--') ? args[at + 1] : true) : null;
};

/** A style by what a person would say: 26, 026, "026-ink-wash", "ink-wash", or a unique part of either name. */
function find(what) {
  const list = styles();
  const text = String(what).trim().toLowerCase();
  const exact = list.find((one) => String(one.id) === text.replace(/^0+(?=\d)/, '') || one.folder.toLowerCase() === text);
  if (exact) return exact;
  const loose = list.filter((one) => one.folder.toLowerCase().includes(text) || one.name.toLowerCase().includes(text) || one.nameZh.includes(text));
  return loose.length === 1 ? loose[0] : null;
}

const all = styles();

if (flag('--list') || args.length === 0) {
  const family = flag('--family');
  const rows = family ? all.filter((one) => one.family === family || one.familyZh === family) : all;
  console.log(`${rows.length} styles${family ? ` in ${family}` : ''}`);
  for (const one of rows) console.log(`${String(one.id).padStart(3, '0')}  ${one.nameZh} · ${one.name}  [${one.familyZh}]  ${one.folder}`);
  process.exit(0);
}

if (flag('--id')) {
  const one = find(flag('--id'));
  if (!one) {
    console.error(`no such style: ${flag('--id')}`);
    process.exit(1);
  }
  const style = JSON.parse(readFileSync(join(one.at, 'style.json'), 'utf8'));
  console.log(JSON.stringify({
    ...style,
    folder: one.folder,
    poster: `assets/atlas/styles/${one.folder}/poster.jpg`,
    code: style.code ? `assets/atlas/styles/${one.folder}/${style.code}` : null,
  }, null, 2));
  process.exit(0);
}

if (flag('--verify')) {
  const missing = [];
  for (const one of all) {
    const style = existsSync(join(one.at, 'style.json')) ? JSON.parse(readFileSync(join(one.at, 'style.json'), 'utf8')) : null;
    if (!style) missing.push(`${one.folder}: no style.json`);
    else if (!existsSync(join(one.at, 'poster.jpg'))) missing.push(`${one.folder}: no poster.jpg`);
    else if (style.code && !existsSync(join(one.at, style.code))) missing.push(`${one.folder}: no ${style.code}`);
  }
  const bytes = (p) => statSync(p).size;
  const posters = all.reduce((sum, one) => sum + (existsSync(join(one.at, 'poster.jpg')) ? bytes(join(one.at, 'poster.jpg')) : 0), 0);
  console.log(`${all.length} styles · ${Math.round(posters / 1024)} kB of covers · ${missing.length ? `${missing.length} incomplete` : 'complete'}`);
  for (const line of missing) console.log(`  ${line}`);
  process.exit(missing.length ? 1 : 0);
}

if (flag('--pick')) {
  const ids = String(flag('--pick')).split(',').map((one) => one.trim()).filter(Boolean);
  const into = resolve(String(flag('--into') ?? 'assets/style-pick'));
  const picked = [];
  for (const id of ids) {
    const one = find(id);
    if (!one) {
      console.error(`no such style: ${id}`);
      process.exit(1);
    }
    mkdirSync(into, { recursive: true });
    const name = `${one.folder}.jpg`;
    const target = join(into, name);
    copyFileSync(join(one.at, 'poster.jpg'), target);
    /* the path the card takes is inside the project: the project's folder is where the chat loads pictures from */
    picked.push({ id: one.id, name: one.name, nameZh: one.nameZh, family: one.family, folder: one.folder, picture: relative(process.cwd(), target).split('\\').join('/') });
  }
  console.log(JSON.stringify(picked, null, 2));
  process.exit(0);
}

console.error('usage: atlas.mjs --list [--family X] | --id 26 | --verify | --pick 26,32,2 [--into dir]');
process.exit(1);
