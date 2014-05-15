var atomify = require('atomify')
  , config
  , cssVars

switch (process.argv[2]) {
  case 'alt':
    cssVars = {
      lightBG: '#2d2d2d',
      darkBG: '#ccc',
      textColor: '#999',
      headerColor: '#999',
      buttonColor: '#036940'
    }
    break

  default:
    cssVars = {
      lightBG: '#fdf6e3',
      darkBG: '#eee8d5',
      textColor: '#657b83',
      headerColor: '#859900',
      buttonColor: '#c0c0c0'
    }
}

config = {
  js: {
    entry: 'entry.js'
    , alias: '/bundle.js'
  }
  , css: {
    entry: 'entry.css'
    , alias: '/bundle.css'
    , variables: cssVars
  }
  , server: {
    path: 'index.html'
    , open: true
  }
}

atomify(config)
