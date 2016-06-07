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

const methodTemplate = _.template(fs.readFileSync(path.join(__dirname, './method.ejs')))

methods.forEach(m => {
  fs.writeFileSync(
    path.join(LIB_DIR, `${m}.js`),
    methodTemplate({ name: m })
  )
})

const allMethodsTemplate = _.template(fs.readFileSync(path.join(__dirname, './allMethods.ejs')))

fs.writeFileSync(
  path.join(LIB_DIR, 'index.js'),
  allMethodsTemplate({ methods })
)
