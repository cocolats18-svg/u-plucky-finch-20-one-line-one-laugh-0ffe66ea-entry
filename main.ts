// One Line, One Laugh — entry program.
//
// Writes a single original funny line (<= 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The line is a self-contained joke: no setup, no picture needed.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// FINAL line — tightened: "said" beats "told me", "started dating"
// beats "now I'm dating". Same joke, fewer words, faster punchline.
const LINE =
  "My doctor said I need more vitamin D, so I started dating a lighthouse keeper.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
