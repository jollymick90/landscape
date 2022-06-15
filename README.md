operation:

touch .gitignore
echo "node_modules" >> .gitignore

npm init
npm install --save-dev typescript webpack webpack-cli
npm install --save-dev @types/lodash http-server lodash ts-loader
npm install --save-dev copy-webpack-plugin

echo "node_modules" >> .gitignore

## prepare setup file and configure

update package.json
add this line

```

  "scripts": {
    "tsc": "tsc",
    "tscw": "tsc --watch",
    "wp": "webpack",
    "wpw": "webpack --watch",
    "serve": "http-server build"
  }

```

create tsconfig.json
```
{
    
    "compilerOptions": {
        "rootDir": "ts",
        "outDir": "dist",
        "target": "es2019",
        "lib": [
            "es2019",
            "dom"
        ],
        "module": "commonjs",
        "esModuleInterop": true,
        "strict": true,
        "sourceMap": true,
    },
    "include": ["**/*"],
    "exclude": ["dist"]
}
```

create webpack.config.js
```
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: {
        main: "./ts/src/main.ts",
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name]-bundle.js",
    },
    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" },
        ],
    },
    plugins: [
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: "./html" },
                ]
            }
        )
    ],
};
```

## source 

build  html file in html folder



npm run wpw
npm run serve
git add .
git commit -m "init"