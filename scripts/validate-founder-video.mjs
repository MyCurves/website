import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const ourStoryPath = path.join(ROOT, "src/app/our-story/page.tsx");
const pressPath = path.join(ROOT, "src/lib/press.ts");
const founderVideoPath = path.join(ROOT, "src/components/FounderVideo.tsx");

const errors = [];
const ourStory = fs.readFileSync(ourStoryPath, "utf8");
const press = fs.readFileSync(pressPath, "utf8");

if (!ourStory.includes('import { FounderVideo } from "@/components/FounderVideo"')) {
  errors.push("our-story/page.tsx must import FounderVideo");
}

if (!/<FounderVideo[\s/>]/.test(ourStory)) {
  errors.push("our-story/page.tsx must render <FounderVideo />");
}

if (!press.includes("INSTAGRAM_FOUNDER_VIDEO_URL")) {
  errors.push("press.ts must export INSTAGRAM_FOUNDER_VIDEO_URL");
}

if (!press.includes("https://www.instagram.com/p/CwW9E3etjuP/")) {
  errors.push("INSTAGRAM_FOUNDER_VIDEO_URL must be CwW9E3etjuP");
}

if (!fs.existsSync(founderVideoPath)) {
  errors.push("FounderVideo component missing");
}

if (errors.length > 0) {
  console.error("Founder video validation failed:\n" + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}

console.log("Founder video wired: Our Story renders FounderVideo → CwW9E3etjuP");
