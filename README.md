# Civ VI Types
<a href="https://www.npmjs.com/package/civvi-types"><img alt="npm install" src="https://img.shields.io/npm/v/civvi-types?color=red&logo=npm"></a>
> TypeScript definitions for Civilization VI using [TypeScriptToLua](https://typescripttolua.github.io/docs/getting-started)

![image](https://user-images.githubusercontent.com/39774593/195465514-cce7ebd6-df96-4484-9b14-b5bb834ec5d6.png)


## Installation

1. Get this package from npm

```bash
yarn add civvi-types --dev
# or
npm install civvi-types --save-dev 
```

2. Modify your tsconfig.json

Highly recommended template you can use:
```json
{
    "$schema": "https://raw.githubusercontent.com/TypeScriptToLua/TypeScriptToLua/master/tsconfig-schema.json",
    "compilerOptions": {
        "target": "esnext",
        "lib": [
            "ES2022.Array",
            "ES2022.Error",
            "ES2022.Object",
            "ES2022.String",
            "ES2015.Promise",
            "ES5",
            "ES2015.Iterable"
        ],
        "moduleResolution": "node",
        "types": [
            "lua-types/core/coroutine",
            "lua-types/core/global",
            "lua-types/core/math",
            "lua-types/core/metatable",
            "lua-types/core/string",
            "lua-types/core/table",
            "@typescript-to-lua/language-extensions",
            "civvi-types"
        ],
        "strict": true
    },
    "tstl": {
        "luaTarget": "5.1",
        "luaLibImport": "inline",
        "noImplicitGlobalVariables": true,
        "noImplicitSelf": true
    }
}
```
