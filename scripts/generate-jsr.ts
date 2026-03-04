import fs from 'node:fs/promises'
import { join } from 'node:path'
import { parse, gt } from 'semver'
import { fileExists, readJson, writeJson } from './utils/fs.ts'

const rootDir = './packages'

const dir = await fs.opendir(rootDir)
for await (const entry of dir) {
  if (entry.isDirectory() === false) continue

  const packagePath = join(rootDir, entry.name)
  const jsrJsonPath = join(packagePath, 'jsr.json')

  if (fileExists(jsrJsonPath)) continue

  const { name, version, exports } = await readJson(join(packagePath, 'package.json'))

  if (gt(version, '0.0.0') === false) continue

  console.log("Creating jsr.json file for %s", name)

  const normalizedName =
    name === 'remix' ? '@remix/remix' : (name as string).replace('@remix-run', '@remix')

  const jsrJsonContent = (
    {
      name: normalizedName,
      version,
      exports,
      publish: {
        include: ['src/', 'README.md', 'LICENSE', 'package.json'],
        exclude: ['src/test/', 'src/**/*.test.ts'],
      },
    })

  writeJson(jsrJsonPath, jsrJsonContent)
}
