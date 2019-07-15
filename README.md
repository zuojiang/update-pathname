update-pathname
===

Update the pathname of a url.

Installation
---

```sh
npm i update-pathname -S
```

Usage
---

```js
const {
  updatePathname,
  replacePathname,
  appendIndexFile,
} = require('update-pathname')

updatePathname('http://localhost/index.html?id=1#top', '/pages/default.html') 
// http://localhost/pages/default.html?id=1#top

replacePathname('pages/index.html?id=1', /index\.html$/i, 'default.html')
// /pages/default.html?id=1

appendIndexFile('http://localhost/?id=1')
// http://localhost/index.html?id=1
```

API
---
* `updatePathname(url: string, newPathname: string): string`
* `updatePathname(url: string, update?: (pathname: string) => string): string`
* `replacePathname(url: string, pattern: string|regexp, replacement: string|function): string`
* `appendIndexFile(url: string, indexFilename: string = 'index.html'): string`

License
---

MIT
