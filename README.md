# typescriptExamples

Quick instructions to build and run the sample TypeScript files in this folder.

Install dev tools (optional global install not required):

```bash
npm install --save-dev typescript ts-node
```

Build (compile `.ts` to `.js`):

```bash
npm run build
```

Run the compiled program:

```bash
npm start
# or directly
# node expvar.js
```

Run the TypeScript file without installing global tools (uses npx):

```bash
npx ts-node expvar.ts
```
