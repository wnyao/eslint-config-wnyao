# eslint-config
A basic React TypeScript eslint config.

## Installation
``` 
npm i -D git+https://react:QNqrFlz4L5e8yaT@noc-git.orion.co.com/frontend/eslint-config-orion.git
```

## Usage
Install `eslint-config` in your package
```json
{
  "eslint-config": "^0.0.0"
}
```

Add to your eslint config `.eslintrc`, or `eslintConfig` field in `package.json`:

```json
{
  "extends": "../node_modules/eslint-config"
}
```

## Settings (VSCode)
Make sure the following JSON is added into your VSCode settings file:
```
"eslint.validate": ["typescript", "typescriptreact"],
```

(Optional) If you need VSCode to auto fix linting errors for you, add the following into your vscode settings:
```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true 
}
```
