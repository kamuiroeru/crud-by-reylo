Set up Reylo in this project. Reylo lets TypeScript import .sql files, with types inferred from the live database. The documentation is cached at `.agents/skills/using-reylo/references/llms.txt`; search the relevant sections there instead of fetching reylo.dev. The links below identify sections in that local file.

When updating Reylo, refresh the documentation with `curl -fsSL https://reylo.dev/llms.txt -o .agents/skills/using-reylo/references/llms.txt`. If updating the `using-reylo` skill replaces its local instructions, restore its instruction to use this cached file.

Each setup has a complete, working example project to copy, whose README's "How Reylo is wired in" lists every line Reylo needs. Install from npm, since the examples link local builds: https://github.com/colinhacks/reylo/tree/main/examples

1. Check the requirements and install Reylo, the engine of the project's database (@reylosql/postgres, @reylosql/mysql or @reylosql/sqlite) and TypeScript 7.1 (currently in beta): https://reylo.dev/#setup
2. Add Reylo to tsconfig.json as a content mapper for the extensions .sql, .reylo.yaml and .reylo.yml, and add a typecheck script that runs tsc --noEmit --runExternalCode (after next typegen on Next.js): https://reylo.dev/#typescript
3. Make .sql imports load wherever the project runs code, with Node's --import or the plugin for its runtime, bundler or framework: https://reylo.dev/#plugins
   The example for that setup shows it end to end (node, nub, bun, vite, nextjs, esbuild, webpack, rspack, jest or cloudflare-workers): https://github.com/colinhacks/reylo/tree/main/examples/<name>
   If the project runs on anything else, Reylo has no plugin for it yet: say so, and do not write one.
4. Point Reylo at the development database with DATABASE_URL, or with direct_url in .reylo.yaml: https://reylo.dev/#database
5. Set up the editor the project uses, or VS Code's settings when nothing in the project names an editor: https://reylo.dev/#editors
6. Write a first query and run it with the project's own driver: https://reylo.dev/#usage and https://reylo.dev/#run
   For more queries, from nested JSON to bulk inserts, see https://reylo.dev/#inference
7. Run the typecheck script. The query's types come from the database; an error in a .sql file shows at its line and column.
8. Install Reylo's agent skill, which gives later sessions its rules for writing queries: npx skills add colinhacks/reylo --skill using-reylo
