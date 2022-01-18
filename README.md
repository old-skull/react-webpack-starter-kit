# react-webpack-starter-kit

🏗🏗🏗 **_Work in progress_** 🏗🏗🏗

## Table of contents

- [TOC](#table-of-contents)
- [About](#about)
- [Available scripts](#available-scripts)
- [Treemap sizes](#treemap-sizes)
- [Q&A](#questions-and-answers)

## About

### Core

- [x] [React](https://reactjs.org/) + [Preact](https://preactjs.com/)(as compatibility layer)
  - [x] [preact/compat](https://preactjs.com/guide/v10/switching-to-preact)
  - [x] [React-Router v6](https://reactrouterdotcom.fly.dev/docs/en/v6)
- [x] [Redux](https://redux.js.org/) + [Redux Tool Kit](https://redux-toolkit.js.org/)
  - [x] [EntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter#overview)
  - [ ] [Query](https://redux-toolkit.js.org/rtk-query/overview)
- [x] [Typescript](https://www.typescriptlang.org/)
- [ ] [GraphQL](https://graphql.org/)
  - [ ] [Apollo](https://www.apollographql.com/)
  - [ ] [Codegen](https://www.graphql-code-generator.com/)
  - [ ] [Cache](https://www.apollographql.com/docs/react/caching/overview/)
  - [ ] [Auth](https://www.apollographql.com/docs/apollo-server/security/authentication/)
- [x] [Webpack](https://webpack.js.org/)
  - [x] [ForkTsCheckerWebpackPlugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)
  - [x] [CopyPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/)
  - [x] [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
  - [x] [TerserPlugin](https://webpack.js.org/plugins/terser-webpack-plugin/)
  - [x] [TsconfigPathsPlugin](https://github.com/dividab/tsconfig-paths-webpack-plugin)
  - [x] [Sass/Scss](https://webpack.js.org/loaders/sass-loader/)
  - [x] [swc-loader](https://github.com/swc-project/swc-loader)
  - [x] [BundleAnalyzerPlugin](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- [x] [PNPM](https://pnpm.io/)

### UI

- [x] [Chakra UI](https://chakra-ui.com/)
- [x] [Chakra UI icons](https://chakra-ui.com/docs/media-and-icons/icon#all-icons)

### Styles

- [x] [Chakra-UI style props](https://chakra-ui.com/docs/features/style-props)
- [x] [Sass/Scss](https://sass-lang.com/)

### Forms

- [x] [React Hook Form](https://react-hook-form.com/)

### Tests

- [x] [Cypress](https://www.cypress.io/)
  - [x] [Unit](https://docs.cypress.io/guides/component-testing/introduction#What-is-Component-Testing)
  - [x] [e2e](https://docs.cypress.io/examples/examples/workshop#End-to-end-Testing-with-Cypress-io)
  - [ ] [Dashboard](https://docs.cypress.io/faq/questions/dashboard-faq)
- [x] Run application before e2e using [start-server-and-test](https://www.npmjs.com/package/start-server-and-test)
- [ ] Generate coverage report
  - [ ] [Unit](https://docs.cypress.io/guides/tooling/code-coverage)
  - [ ] [e2e](https://docs.cypress.io/guides/tooling/code-coverage#E2E-code-coverage)

### Styleguide

- [x] [ESLint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)

### CI

- [ ] [Github Actions](https://docs.github.com/en/actions)
  - [ ] Build
  - [ ] Unit tests
  - [ ] e2e tests
  - [ ] Coverage
  - [ ] Deploy

### Utils

- [x] [Husky](https://typicode.github.io/husky/#/)
  - [x] Pre-commit(lint + format)

## Available scripts

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
pnpm unit
```

### Run e2e tests

```bash
pnpm e2e
```

### Build for production and run BundleAnalyzerPlugin

```bash
pnpm start:analyze
```

## Treemap sizes

_Generated via BundleAnalyzerPlugin_

### Stat

|   Chunk    |   Size   |
| :--------: | :------: |
|    All     | 1.44 MB  |
| vendors.js | 1.39 MB  |
|  main.js   | 49.58 KB |
| runtime.js | 1.49 KB  |

### Parsed

|   Chunk    |   Size    |
| :--------: | :-------: |
|    All     | 460.78 KB |
| vendors.js | 440.47 KB |
|  main.js   | 18.81 KB  |
| runtime.js |  1.49 KB  |

### Gzipped

|   Chunk    |   Size    |
| :--------: | :-------: |
|    All     | 146.68 KB |
| vendors.js | 139.91 KB |
|  main.js   |  5.99 KB  |
| runtime.js |   802 B   |

## Questions and Answers

### Why there is a tsconfig and webpack config under cypress folder?

Cypress requires independent configuration for some tools.
For example, we dont need to use full webpack config for tests and we need to include cypress types for typescript.

Since(for this moment) kit uses swc-loader we also need to copy `.swcrc` file from root to the cypress folder.
In the future there is could be the way to set path for .swcrc and use root config.

### What about images and favicons?

I decided to focus on the tools and their configs. If you need to add some loaders or plugins feel free to customize webpack.config. For example you may want to add [favicon-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin). This plugin could generate different sets of favicons for you.

### Why there is so much `index.ts`?

I'm using concepts from [feature-sliced architecture](https://github.com/feature-sliced). You could delete or replace content from `src` folder and use your own naming strategy or architecture. I like short paths in imports and index.ts + ts-paths work perfect for me.

Also check out [atomic-design pattern](https://bradfrost.com/blog/post/atomic-web-design/).
