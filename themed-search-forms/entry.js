var SearchForm  = require('./search-form/')

new SearchForm({
  el: '#search-form-1'
  , formLabel: 'Search this site:'
  , buttonLabel: 'go'
})

new SearchForm({
  el: '#search-form-2'
  , formLabel: 'Can I help you?'
  , buttonLabel: 'search'
})

new SearchForm({
  el: '#search-form-3'
  , formLabel: 'Enter your query below'
})
