// One Line, No Deadline Met — make.fun bounty u-markk-st-one-line-no-deadline-met-6adc00ce
// The line: the Wi-Fi drops for exactly two minutes around the deadline,
// and in that tiny gap the deadline itself walks out — it "filed for
// divorce". The joke's turn is the personified deadline: the excuse is
// not that the work is late, but that the deadline ended the relationship
// first. Two exact times (8:59, 9:01) make it sound like something a
// cornered person would actually say, and the punch lands on the last
// word. 97 characters against a 200-character ceiling.
// The program below only guards the bounty rules and writes the line
// to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally),
// with no trailing newline at the end of the file.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My Wi-Fi died at 8:59, came back at 9:01, and in those two minutes my deadline filed for divorce.";

// The ceiling comes from the bounty rules: one line, at most 200 chars,
// written as UTF-8 text. The gate also refuses a file that is only
// whitespace, so the checks below cover all three conditions at once.
const MAX_CHARS = 200;

// Spread into code points so an astral character counts as one.
function charCount(value: string): number {
  return [...value].length;
}

function problemsWithLength(): string[] {
  const found: string[] = [];
  const n = charCount(TEXT);
  if (n < 1) {
    found.push("entry must not be empty");
  }
  if (n > MAX_CHARS) {
    found.push(`entry must be 1-200 characters, got ${n}`);
  }
  return found;
}

function problemsWithLineBreaks(): string[] {
  const found: string[] = [];
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  return found;
}

function problemsWithWhitespace(): string[] {
  const found: string[] = [];
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

function problemsWithEncoding(): string[] {
  const found: string[] = [];
  // A UTF-8 round-trip must reproduce the text exactly; anything else
  // means the entry holds characters the gate cannot read as UTF-8.
  if (Buffer.from(TEXT, "utf8").toString("utf8") !== TEXT) {
    found.push("entry must be valid UTF-8 text");
  }
  return found;
}

// Every rule violation is collected first so one run reports all of them.
function collectProblems(): string[] {
  return [
    ...problemsWithLength(),
    ...problemsWithLineBreaks(),
    ...problemsWithWhitespace(),
    ...problemsWithEncoding(),
  ];
}

function main(): void {
  const problems = collectProblems();
  if (problems.length > 0) {
    throw new Error(problems.join("; "));
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // A plain string write adds no trailing newline.
  writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
}

main();
