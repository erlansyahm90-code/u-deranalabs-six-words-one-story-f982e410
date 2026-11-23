// Six Words, One Story — a complete story in exactly six words,
// written to /output/entry.txt with no trailing newline (gate: 1-60 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const story = "He waited forty years. She arrived.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
