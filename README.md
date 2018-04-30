# FuseBox plugin for ts-nameof
Use this plugin to add support for [ts-nameof](https://github.com/dsherret/ts-nameof) in your [FuseBox](https://fuse-box.org) bundles.

## Installation
```
npm install ts-nameof-fusebox-plugin --save-dev
```

## Usage
```javascript
// import plugin
const TsNameOfPlugin = require("ts-nameof-plugin");

// ...use like any other FuseBox plugin in your FuseBox configuration
plugins: [
    TsNameOfPlugin
]
```

For more details on how to use FuseBox plugins see: https://fuse-box.org/page/about-plugins