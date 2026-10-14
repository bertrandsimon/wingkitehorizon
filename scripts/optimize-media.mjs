import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

import ffmpegPath from "ffmpeg-static";

const ROOT = process.cwd();

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function run(bin, args) {
  const res = spawnSync(bin, args, { stdio: "inherit" });
  if (res.error) throw res.error;
  if (res.status !== 0) {
    throw new Error(`Command failed: ${bin} ${args.join(" ")}`);
  }
}

function sipsToJpeg({
  inputAbsPath,
  outputAbsPath,
  maxSize = 1920,
  quality = 80,
}) {
  ensureDir(path.dirname(outputAbsPath));
  run("/usr/bin/sips", [
    "-s",
    "format",
    "jpeg",
    "-s",
    "formatOptions",
    String(quality),
    "-Z",
    String(maxSize),
    inputAbsPath,
    "--out",
    outputAbsPath,
  ]);
}

function optimizeMartiniqueImages() {
  const srcDir = path.join(ROOT, "public", "images", "martinique");
  const outDir = path.join(srcDir, "gallery");
  ensureDir(outDir);

  const picks = [
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "Le Marin.jpg",
    "bequia-cruise-port-guide-lead.jpg",
    "mm217_38_40_invitation_tobago_cays_02.jpg",
    "5e163496dde6342b0503e4be_MOPION-HORIZONTAL_edit_1080.jpg",
  ];

  for (const [idx, name] of picks.entries()) {
    const inputAbsPath = path.join(srcDir, name);
    if (!fs.existsSync(inputAbsPath)) {
      throw new Error(`Missing martinique image: ${inputAbsPath}`);
    }
    const outputAbsPath = path.join(
      outDir,
      `martinique-${String(idx + 1).padStart(2, "0")}.jpg`,
    );
    sipsToJpeg({ inputAbsPath, outputAbsPath });
  }

  // Remove originals (keep only /gallery)
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (entry.isDirectory()) continue;
    fs.unlinkSync(path.join(srcDir, entry.name));
  }
}

function optimizeGreeceImages() {
  const srcDir = path.join(ROOT, "public", "images", "grece");
  const outDir = path.join(srcDir, "gallery");
  ensureDir(outDir);

  const files = fs
    .readdirSync(srcDir, { withFileTypes: true })
    .filter((e) => e.isFile() && /\.(jpe?g|png)$/i.test(e.name))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, "en"));

  for (const [idx, name] of files.entries()) {
    const inputAbsPath = path.join(srcDir, name);
    const outputAbsPath = path.join(
      outDir,
      `grece-${String(idx + 1).padStart(2, "0")}.jpg`,
    );
    sipsToJpeg({ inputAbsPath, outputAbsPath });
  }

  // Remove originals (keep only /gallery and /drone folder)
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (entry.isDirectory()) continue;
    if (entry.name === ".DS_Store") {
      fs.unlinkSync(path.join(srcDir, entry.name));
      continue;
    }
    if (/\.(jpe?g|png)$/i.test(entry.name)) {
      fs.unlinkSync(path.join(srcDir, entry.name));
    }
  }
}

function optimizeDroneVideos() {
  if (!ffmpegPath) throw new Error("ffmpeg-static did not provide a binary");

  const inDir = path.join(ROOT, "public", "images", "grece", "drone");
  const outDir = path.join(ROOT, "public", "videos");
  ensureDir(outDir);

  const inputHome = path.join(inDir, "boat.mp4");
  const inputGreece = path.join(inDir, "boat2.mp4");
  const outputHome = path.join(outDir, "home-banner.mp4");
  const outputGreece = path.join(outDir, "grece-banner.mp4");

  const encode = (inputPath, outputPath) => {
    if (!fs.existsSync(inputPath)) {
      throw new Error(`Missing drone video: ${inputPath}`);
    }
    run(ffmpegPath, [
      "-y",
      "-i",
      inputPath,
      "-an",
      "-vf",
      "scale=1920:-2",
      "-r",
      "30",
      "-c:v",
      "libx264",
      "-preset",
      "veryfast",
      "-crf",
      "28",
      "-pix_fmt",
      "yuv420p",
      "-movflags",
      "+faststart",
      outputPath,
    ]);
  };

  encode(inputHome, outputHome);
  encode(inputGreece, outputGreece);

  // Remove 4K originals to keep the repo light
  for (const name of ["boat.mp4", "boat2.mp4"]) {
    const p = path.join(inDir, name);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }
}

function main() {
  optimizeMartiniqueImages();
  optimizeGreeceImages();
  optimizeDroneVideos();
}

main();
