# react-webpack-starter-kit

🏗🏗🏗 **_Work in progress_** 🏗🏗🏗

## About

### Core

- [x] React + Preact(as compatibility layer)
  - [x] [preact/compat](https://preactjs.com/guide/v10/switching-to-preact)
  - [x] React-Router v6
- [x] Redux + Redux Tool Kit
  - [x] EntityAdapter
  - [ ] Query
- [x] Typescript
- [ ] GraphQL
  - [ ] Cache
  - [ ] Auth
- [x] Webpack
  - [x] ForkTsCheckerWebpackPlugin
  - [x] CopyPlugin
  - [x] HtmlWebpackPlugin
  - [x] TerserPlugin
  - [x] TsconfigPathsPlugin
  - [x] Sass/Scss

### UI

- [x] Chakra UI
- [x] Chakra UI icons

### Styles

- [x] Chakra-UI inline
- [x] Sass/Scss

### Tests

- [x] Cypress
  - [x] Unit
  - [x] e2e
  - [ ] Cypress dashboard
- [x] Run application before e2e using `start-server-and-test`
- [ ] Generate coverage report
  - [ ] Unit
  - [ ] e2e

### Styleguide

- [x] ESLint
- [x] Prettier

### CI

- [ ] Github Actions
  - [ ] Build
  - [ ] Unit tests
  - [ ] e2e tests
  - [ ] Coverage
  - [ ] Deploy

### Utils

- [x] Husky
  - [x] Pre-commit(lint + format)

## Availible scripts

### Start in dev mode

```bash
pnpm start
```

### Build for production

```bash
pnpm build
```

### Format via prettier

```bash
pnpm format
```

### Lint via ESLint

```bash
pnpm lint
```

### Run unit tests

```bash
pnpm cypress:unit
```

### Run e2e tests

```bash
pnpm cypress:e2e
```
