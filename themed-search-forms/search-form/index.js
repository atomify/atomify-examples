var Button = require('../button/')
  , template = require('./search-form.html.hbs')
  , $ = require('jquery-browserify')
  , overlay = require('ios-overlay')

var SearchForm = function (opts) {
  this.opts = opts || {}
  this.opts.formLabel = this.opts.formLabel || 'Search'

  this.$el = $(this.opts.el) || $('body')
  this.$el.on('search', _onSearch)

  this.render()
}

SearchForm.prototype.render = function () {
  var self = this
    , button = new Button({
        label: this.opts.buttonLabel
      , action: function () {
          self.$el.trigger('search', $(self.opts.el + ' [name=search]').val())
        }
      })

  this.$el.append(template(this.opts))
  this.$el.addClass('search-form')
  this.$el.find('.button-target').replaceWith(button.render())
}

module.exports = SearchForm

function _onSearch (evt, term) {

  var searchOverlay = overlay({text: 'searching for ' + term})

  setTimeout(function () {
    searchOverlay.update({text: 'Done'})

    setTimeout(function () {
      searchOverlay.hide()
    }, 300)

  }, 1500)
}
