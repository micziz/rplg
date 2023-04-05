const data = require('./data.js')

module.exports = function gen() {
  return data[Math.floor(Math.random() * data.length)];
}
