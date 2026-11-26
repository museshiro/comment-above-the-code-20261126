// The Comment Above the Code — make.fun entry
// Writes a single line to /output/entry.txt. The grader sandbox may run
// with a read-only working directory, so the only write here is absolute.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "// This only works because the login page loads first. Nobody knows what login has to do with invoices, and nobody is asking.";

// The gate allows 1–200 characters; refuse to write anything out of range.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line is ${line.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
