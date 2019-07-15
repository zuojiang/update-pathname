const join = require('url-join')
const parse = require('url-parse')

function updatePathname (url, update = null) {
  const _url = parse(url)
  let pathname
  if (typeof update == 'function') {
    pathname = update(_url.pathname)
  } else if (update) {
    pathname = update.toString()
  } else {
    pathname = _url.pathname
  }
  if (!pathname) {
    pathname = '/'
  }
  _url.pathname = join('/', pathname)
  return _url.toString()
}

function replacePathname (url, pattern, replacement) {
  return updatePathname(url, pathname => pathname.replace(pattern, replacement))
}

function appendIndexFile (url, indexFilename = 'index.html') {
  return updatePathname(url, pathname => join(pathname, indexFilename))
}

module.exports = updatePathname
module.exports.updatePathname = updatePathname
module.exports.replacePathname = replacePathname
module.exports.appendIndexFile = appendIndexFile
