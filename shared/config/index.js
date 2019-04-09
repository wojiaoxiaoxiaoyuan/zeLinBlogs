/**
 * 项目基本配置
 * @type {Object}
 */

let apiServer = {}

switch (process.env.API_SERVER) {
  case 'prod':
    apiServer = require('./prod')
    break
  case 'test':
    apiServer = require('./test')
    break
  default:
    apiServer = require('./test')
}

export const API_SERVER = {
  default: `${apiServer.api.protocol || 'http'}://${apiServer.api.host}:${apiServer.api.port || ''}`,
}
