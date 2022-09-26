import { boot } from 'quasar/wrappers'
import socketIO from 'socket.io-client'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = socketIO.io

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$socketio = socketIO.io
  // ^ ^ ^ this will allow you to use this.$socketio (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

})

export { api }
