import fs from 'node:fs/promises'
import { join } from "node:path";
import { parse, gt } from "semver";

const rootDir = "./packages";

const dir = await fs.opendir(rootDir);
for await (const entry of dir) {
  if (entry.isDirectory() === false) continue;

  const packagePath = join(rootDir, entry.name);
  const jsrJsonPath = join(packagePath, "jsr.json");

  try {
    await fs.rm(jsrJsonPath);
  } catch {
    // No file
  }

  const packageJson = await fs.readFile(
    join(packagePath, "package.json"),
    {encoding: 'utf8'}
  );

  const { name, version, exports } = JSON.parse(packageJson);

  if (gt(version, "0.0.0") === false) 
    continue;

  const jsrJsonContent = JSON.stringify(
    {
      name: (name as string).replace("@remix-run", "@remix"),
      version,
      exports,
      publish: {
        include: ["src/", "README.md", "LICENSE", "package.json"],
        exclude: ["src/test/"],
      },
    },
    undefined,
    2,
  );

  await fs.writeFile(jsrJsonPath, jsrJsonContent);
}
