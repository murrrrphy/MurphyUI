import Toast from '../src/lib/Toast'

export default {
  install: (app, options) => {
    app.config.globalProperties.$toast = message => {
      let Constructor = app.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = message
      toast.mount()
      document.body.appendChild(toast.$el)
    }
  }
}