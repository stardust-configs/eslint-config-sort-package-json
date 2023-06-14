# eslint-config-sort-package-json

> Sort your `package.json` based on [the package.json specifics](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)

## Install

```sh
npm i eslint-config-sort-package-json -D
```

or

```sh
yarn add eslint-config-sort-package-json -D
```

or

```sh
pnpm add eslint-config-sort-package-json -D
```

## Usage

Add config to your `.eslintrc*` file.

```js
module.exports = {
  extends: ['sort-package-json'],
}
```

## VSCode integration

Add `"json"` to `eslint.validate` in `.vscode/settings.json`.

```json
{
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "json"]
}
```

## Author

[@p-chan](https://github.com/p-chan)

## License

MIT
