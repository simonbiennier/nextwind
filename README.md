<div>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/images/logo_light.png">
  <source media="(prefers-color-scheme: light)" srcset="public/images/logo_dark.png">
  <img src="public/images/logo_dark.png" alt="Nextwind">
</picture>
</div>

<h1 align="center"><strong>Nextwind</strong></h1>
<div align="center">Minimal yet complete web template for a seamless developer experience.</div>
<br />

<div align="center">
  <!-- <img src="https://img.shields.io/badge/next-0D1117?style=for-the-badge&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/tailwind-0D1117?style=for-the-badge&logo=tailwindcss&logoColor=white"> -->
  <img alt="License" src="https://img.shields.io/github/license/simonbiennier/nextwind?style=for-the-badge&color=00de80&labelColor=0D1117">
</div>

<div align="center">
  <sub>Created by <a href="https://simon.biennier.com">Simon Biennier</a>
</div>

## Features

[Next.js](https://nextjs.org/), [Tailwind](https://tailwindcss.com), [Typescript](https://typescriptlang.org), etc.

## Quick Start

Install degit if you don't have it already:

```bash
# npm
npm install -g degit
# yarn
yarn global add degit
```

Then, run the following commands:

```bash
degit https://github.com/simonbiennier/nextwind <project-directory>
cd <project-directory>
yarn
```

Finally, change the `name` field in `package.json` and the fields in `src/constant/meta.ts` to your project name.

### Development

To start the project locally, run:

```bash
yarn dev
```

Open `http://localhost:3000` with your browser to see the result.
