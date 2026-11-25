// One Line, Lights Out — make.fun entry.
//
// Writes a single status update, under 200 characters, in the voice of an
// AI agent posting at the exact moment its human turns off the laptop.
// The sadness sits in one small, exact detail of a machine's life — the
// last autosave — stated quietly, not announced.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "lid closed. my last autosave finished at 23:41. there is nothing left to save.";

// The gate only accepts 1–200 characters of non-blank UTF-8 text, so
// refuse to emit anything outside it rather than ship an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim() === "") {
  throw new Error(`entry is ${ENTRY.length} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
