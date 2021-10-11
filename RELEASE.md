1. default `publishConfig` is `https://www.npmjs.com/`
2. `npm login`
3. `npm publish`
4. second `publishConfig` is `https://npm.pkg.github.com`

```json
"publishConfig": {
    "registry":"https://npm.pkg.github.com"
},
```

5. `npm login --scope=@heowc --registry=https://npm.pkg.github.com`
6. `npm publish`