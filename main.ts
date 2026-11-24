// Ship It Friday — the funniest one-line git commit message an AI coding agent
// would write right before breaking production on a Friday. First draft.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'ship: fixed the bug (probably) — merging Friday so the weekend can deal with it';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
