const assert = require('assert')
const {
  updatePathname,
  replacePathname,
  appendIndexFile,
} = require('./index')

assert.equal('http://localhost/pages/default.html?id=1#top',
  updatePathname('http://localhost/index.html?id=1#top', '/pages/default.html'))

assert.equal('/pages/default.html?id=1',
  replacePathname('pages/index.html?id=1', /index\.html$/i, 'default.html'))

assert.equal('http://localhost/index.html?id=1',
  appendIndexFile('http://localhost/?id=1'))

assert.equal('/index.html?id=1#top',
  updatePathname('/index.html?id=1#top'))

assert.equal('/?id=1#top',
  updatePathname('/index.html?id=1#top', pathname => {}))

assert.equal('/../index.html?id=1#top',
  updatePathname('../index.html?id=1#top'))

