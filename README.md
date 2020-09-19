[status]: https://img.shields.io/badge/Status-Broken-/?style=for-the-badge&color=red

![status]

# nativescript-playground-bar
A plugin for your NativeScript Playground projects to help implement a light or dark content status bar.

## Installation
1. From the [Playground UI](https://play.nativescript.org/) select `Add NPM package` _(via the Explorer popup menu)_.
2. Enter `nativescript-playground-bar` as the _NPM package name_.
3. Click _Add_.

## Usage

```js
// main-page.js
const PlaygroundBar = require("~/nativescript-playgroundbar");

exports.pageLoaded = function (args) {
  PlaygroundBar.lightContent(args.object);
}
```

## Methods

#### lightContent
Sets the `iOS` status bar to light content.

| Arguments | Required | Default | Description |
| --- | --- | --- | --- |
| page | yes | n/a | The current page with the status bar you want to change. |
| timeout | no | 10 | Specifies the time _(in milliseconds)_ you want to delay the change of style. |

#### darkContent
Sets the `iOS` status bar to dark content, which is the playgrounds default style.

| Arguments | Required | Default | Description |
| --- | --- | --- | --- |
| page | yes | n/a | The current page with the status bar you want to change. |
| timeout | no | 10 | Specifies the time _(in milliseconds)_ you want to delay the change of style. |
