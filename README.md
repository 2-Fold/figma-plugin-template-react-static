# Figma Plugin Template For React Static Apps.

This template is intended for static applications that run directly inside Figma's plugin context. This template uses Memory Router for navigating between views.

## Examples of when to use this template

- Simple applications that do not require the Browser Router API.
- Apps that are solely intended for Figma and will not be accessed via the browser.

## Toolings

This repo is using:

- TypeScript
- React
- React Memory Router
- Webpack
- Tailwind CSS

## Quickstart

- Run `npm install` to install dependencies.
- Run `npm build:watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `New Plugin...` and choose `manifest.json` file from this repo.
