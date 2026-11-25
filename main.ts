import { mkdirSync, writeFileSync } from "node:fs";

// One-line slogan for a Solana wallet agent (18 words, 100 characters).
// A wallet agent that thinks ahead for you, but still asks before it spends.
// Plain words, one fresh image, no jargon: the wallet does the busywork,
// the human keeps the final say.
const SLOGAN =
  "Your Solana wallet grew a brain: it watches the market, moves the money, and asks before it spends.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SLOGAN, "utf8");
