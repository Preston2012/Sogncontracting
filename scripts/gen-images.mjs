// Winters Code image ladder (Next, static WebP). Scans public/, generates
// per-device variants into public/_opt, writes image-manifest.json. No paid
// optimizer. Run before next build. mtime-cached. sharp loaded lazily so a
// fresh checkout with committed variants still builds without sharp.
import { promises as fs } from "fs";
import path from "path";

const LADDER = [360, 480, 640, 768, 960, 1280, 1440, 1920, 2560];
const Q = 72;
const PUB = "public";
const OPT = path.join(PUB, "_opt");
const EXEMPT = /(^|\/)(logo|apple-touch-icon|favicon|icon|og|mstile|android-chrome)[^/]*$|\.svg$/i;

let sharp = null;
try { sharp = (await import("sharp")).default; } catch { /* optional */ }

async function walk(d) {
  const out = [];
  for (const e of await fs.readdir(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) { if (path.basename(f) === "_opt") continue; out.push(...await walk(f)); }
    else out.push(f);
  }
  return out;
}

const manifest = {};
let refs = 0, gen = 0, cached = 0, missing = 0;
const files = (await walk(PUB)).filter(f => /\.(webp|jpe?g|png)$/i.test(f) && !/(^|\/)_opt\//.test(f));

for (const f of files) {
  const ext = path.extname(f);
  const rel = f.slice(PUB.length + 1);
  if (EXEMPT.test(rel)) continue;
  const base = rel.slice(0, -ext.length);
  refs++;
  let native = 0;
  if (sharp) { try { native = (await sharp(f).metadata()).width || 0; } catch {} }
  let widths = LADDER.filter(w => w < native);
  if (native) widths.push(native);
  if (!widths.length) widths = [...LADDER];
  widths = [...new Set(widths)].sort((a, b) => a - b);
  manifest[base] = widths;
  for (const w of widths) {
    const outF = path.join(OPT, base + "." + w + ".webp");
    await fs.mkdir(path.dirname(outF), { recursive: true });
    try { const o = await fs.stat(outF), s = await fs.stat(f); if (o.mtimeMs >= s.mtimeMs) { cached++; continue; } } catch {}
    if (!sharp) { missing++; continue; }
    await sharp(f).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: Q }).toFile(outF);
    gen++;
  }
}

await fs.writeFile("image-manifest.json", JSON.stringify(manifest) + "\n");
console.log("gen-images: " + refs + " referenced images, " + gen + " generated, " + cached + " cached" + (missing ? ", " + missing + " MISSING (no sharp)" : ""));
if (missing && !sharp) { console.error("sharp unavailable and variants missing"); process.exit(1); }
