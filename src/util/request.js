import {ConfigModel, Response} from '../model';
import axios from 'axios'
import mock from "../mock";

export const request = (option) => {
  return new Promise((resolve, reject) => {
    axios(option).then(v => {
      const m = Response.instance(v.data)
      if (m.isOK()) {
        resolve(v.data.data)
      } else {
        reject(m)
      }
    }).catch(e => {
      reject(e)
    })
  })
}


export const createApi = (url, data) => {
  if (ConfigModel.isMock() || (mock[url] && mock[url].isMock)) {
    console.info("mock api => ", url, "param => ", data)
    return new Promise(resolve => {
      setTimeout(function () {
        resolve(mock[url])
      }, 1000)
    })
  }

  let param = {
    url,
    data,
    method: 'post',
    headers: {
      "Access-Token": ""
    },
  }

  return request(param)
}