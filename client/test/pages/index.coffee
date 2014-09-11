for page in require('fs').readdirSync(__dirname) when not page.match /^index/
  mod = require "./#{page}"
  exports[mod.name] = mod
