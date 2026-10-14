# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Dependências do projeto

As dependências abaixo são declaradas no `package.json`. Execute os comandos na pasta `barbearia-felix\front-end`.

### Dependências da aplicação

```powershell
npm install react@^19.2.8
npm install react-dom@^19.2.8
npm install react-router@^8.4.0
```

### Dependências de desenvolvimento

```powershell
npm install -D @tailwindcss/vite@^4.3.3
npm install -D @types/node@^24.13.3
npm install -D @types/react@^19.2.18
npm install -D @types/react-dom@^19.2.7
npm install -D @vitejs/plugin-react@^6.1.1
npm install -D oxlint@^1.81.0
npm install -D tailwindcss@^4.3.3
npm install -D typescript@~6.0.2
npm install -D vite@^8.3.0
```
