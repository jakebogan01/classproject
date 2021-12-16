Nova.booting((Vue, router, store) => {
  Vue.component('index-text-list', require('./components/IndexField'))
  Vue.component('detail-text-list', require('./components/DetailField'))
  Vue.component('form-text-list', require('./components/FormField'))
})
