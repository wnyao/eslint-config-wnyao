# eslint-config-wnyao

An basic and opinionated React TypeScript eslint config for my personal use.

## Installation
``` 
npm i -D https://github.com/wnyao/eslint-config-wnyao.git
```

## Usage
Install `eslint-config-wnyao` in your package
```js
devDependencies: {
  "eslint-config-wnyao": "^0.0.0"
}
```

Add to your eslint config :

```js
module.exports = {
  extends: 'wnyao',
  ...
};
```

## Settings (local development)
Make sure the following JSON is added into your local settings file:
```
"eslint.validate": ["typescript", "typescriptreact"],
```
