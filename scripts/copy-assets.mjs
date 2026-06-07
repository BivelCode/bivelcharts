// Copy embedded font assets into the build output.
// Runs after `vite build` so the variable font ships at dist/assets/fonts/.
import { cpSync, existsSync, mkdirSync } from 'node:fs'

const SRC = 'src/assets/fonts'
const DEST = 'dist/assets/fonts'

if (!existsSync(SRC)) {
  console.error(`copy-assets: source "${SRC}" not found`)
  process.exit(1)
}

mkdirSync(DEST, { recursive: true })
cpSync(SRC, DEST, { recursive: true })
console.log(`copy-assets: copied ${SRC} -> ${DEST}`)
