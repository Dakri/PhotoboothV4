
// const socketUrlDev = `ws://192.168.1.1:3000`
const socketUrlDev = `ws://192.168.42.158:3000`
const currentSocketUrl = 'ws://' + location.host
export const socketUrl = socketUrlDev
// export const socketUrl = (currentSocketUrl.match('localhost'))?socketUrlDev:currentSocketUrl


// const httpDev = `http://192.168.1.1:3000`
const httpDev = `http://192.168.42.158:3000`
const currentHttpUrl = 'http://' + location.host
export const httpUrl = httpDev
// export const httpUrl = (currentHttpUrl.match('localhost'))?httpDev:currentHttpUrl

