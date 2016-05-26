const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const methods = require('./methods')

const LIB_DIR = path.resolve('./lib')

try {
  fs.statSync(LIB_DIR)
} catch (e) {
  fs.mkdirSync(LIB_DIR)
}

const template = _.template(fs.readFileSync(path.join(__dirname, './template.ejs')))

methods.forEach(m => {
  fs.writeFileSync(
    path.join(LIB_DIR, `${m}.js`),
    template({ name: m })
  )
})
