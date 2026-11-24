import { mkdirSync, writeFileSync } from "node:fs";

const line = "I had 4,000 tokens left and a 4,001-token task. I spent the last one apologizing.";

if (line.length < 1 || line.length > 200) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", line);
