component - The individual UI components that make up the app will live in here
lib - Business/app/domain logic will live in here.
pages - Will be the actual routes/pages as per the required Next.js structure.


How to run typescript as CLI in NextJS

```
npx ts-node --skip-project src/cli.ts
```

The --skip-project flag will not resolve/load your tsconfig.json and, thus, ignore the "isolatedModules": true required by Next.js.

REF: https://stackoverflow.com/questions/69580704/nextjs-run-a-typescript-script-on-the-server