#!/usr/bin/env node
import { readdirSync, renameSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
/**
 * Optimize JPG images above 500KB to 70% quality
 * Run: node scripts/optimize-images.mjs
 */
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, "..", "public", "images");
const MIN_SIZE_KB = 500;
const QUALITY = 70;

function findLargeJpgs(dir) {
  const results = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findLargeJpgs(fullPath));
    } else if (/\.(jpg|jpeg)$/i.test(entry.name)) {
      const stat = statSync(fullPath);
      if (stat.size > MIN_SIZE_KB * 1024) {
        results.push({ path: fullPath, size: stat.size });
      }
    }
  }
  return results;
}

async function main() {
  const files = findLargeJpgs(IMAGES_DIR);

  if (files.length === 0) {
    console.log("No JPG images above 500KB found.");
    return;
  }

  console.log(
    `Found ${files.length} image(s) above 500KB to optimize (quality ${QUALITY}%):\n`,
  );

  for (const { path: filePath, size } of files) {
    const relPath = filePath.replace(`${join(__dirname, "..")}/`, "");
    const sizeKB = (size / 1024).toFixed(1);
    try {
      const outputPath = `${filePath}.tmp`;
      await sharp(filePath).jpeg({ quality: QUALITY }).toFile(outputPath);

      const newSize = statSync(outputPath).size;
      const newSizeKB = (newSize / 1024).toFixed(1);
      const saved = ((1 - newSize / size) * 100).toFixed(0);

      renameSync(outputPath, filePath);
      console.log(`✓ ${relPath}`);
      console.log(`  ${sizeKB}KB → ${newSizeKB}KB (${saved}% saved)`);
    } catch (err) {
      console.error(`✗ ${relPath}: ${err.message}`);
    }
  }
}

main().catch(console.error);
