import { Message } from 'iview';

export class Err {
  info

  static instance(e) {
    if (e instanceof Err) {
      return e
    }
    return new Err(e)
  }

  constructor(info) {
    this.info = info
  }

  isIgnore(){
    return this.info.ignoreErr
  }

  // is axios error {response:{}}
  isAxiosErr() {
    return typeof this.info === 'object' && this.info.hasOwnProperty('response')
  }

  getMsg() {
    return JSON.stringify(this.info)
  }
}

export const errHandle = function * (e) {
  console.log("e" , e)
  e = Err.instance(e)
  if(!e.isIgnore()){
    Message.error({content:e.getMsg()})
  }
}
