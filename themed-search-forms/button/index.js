var $ = require('jquery-browserify')

var Button = function (opts) {
  opts = opts || {}

  this.label = opts.label || 'submit'
  this.action = opts.action || function () {}
}

Button.prototype.render = function () {
  this.$el = $('<button>' + this.label + '</button>')
  this.$el.on('click', this.action.bind(this))
  return this.$el
}

module.exports = Button
