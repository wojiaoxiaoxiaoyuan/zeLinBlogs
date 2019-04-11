import { API_SERVER } from 'shared/config'
import message from 'shared/utils/message'
import router from '@/router'
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'

// 请求拦截器
axios.interceptors.request.use(req => {
  let url = ''
  if (req.method === 'get') {
    url = req.url.method
    delete req.url.method
    req.params = req.url
  } else {
    url = req.url.method
    delete req.url.method
    req.data = qs.stringify(req.url, {arrayFormat: 'repeat'})
  }
  req.url = `${API_SERVER.default}/${url}`
  return req
}), err => {
  return Promise.reject(err)
}

// 响应拦截器
axios.interceptors.response.use(res => {
  if (res.data.message) {
    if (res.data.status === 100) {
      Vue.prototype.$message(message[res.data.message])
    } else if (res.data.status === 200) {
      Vue.prototype.$message.success(message[res.data.message])
    } else if (res.data.status === 300) {
      Vue.prototype.$message.warning(message[res.data.message])
    } else if (res.data.status === 400) {
      Vue.prototype.$message.error(message[res.data.message])
    }
  }
  return res
}), err => {
  return Promise.reject(err)
}

export default axios
