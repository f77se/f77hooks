
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./f77hooks.cjs.production.min.js')
} else {
  module.exports = require('./f77hooks.cjs.development.js')
}
