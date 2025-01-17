# Vue 3 + Vite + Electron + TypeScript

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, 

*** WTF does this mean !!!! ***
they are shimmed to be a generic Vue component type by default. 

just doesn't make any sense.  shimmed?


In most cases this is fine if you don't really care about component prop types outside of templates. 

care about component prop types outside of templates.. wtf... aren't we always inside of a template?


However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

# Scripts

Run `yarn electron:dev` to work with electron in development mode.
```bash
yarn electron:dev
```

Run `yarn app:build` to build your electron app.
```bash
yarn app:build
```

Run `yarn dev` to open vite in browser in development mode.
```bash
yarn dev
```
Run `yarn build` to build files and can be served.
```bash
yarn build
```