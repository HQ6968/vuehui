import {after} from "../../../util/index";
import co from 'co'

/**
 * let req = new RequestPool()
 * req.api = xxx
 * req.push(xxx)
 * req.push(xxx)
 * req.push(xxx)
 * req.push(xxx)
 *
 * req.notifyLast = (res => {
 *
 * })
 */


export class RequestPool {
  notifyLast
  api
  index = 0

  static instance(){
    return new RequestPool()
  }

  push(param) {
    this.addIndex()
    this.do(param)
  }

  addIndex(){
    this.index++
    //console.log("RequestPool index" , this.index)
  }

  do(param) {
    // 等待500ms
    let data = {
      param: param,
      index: this.index
    }
    //console.log("param" , JSON.stringify(data))
    let me = this
    co(function* () {
      yield after(0.5)
      if (data.index === me.index) {
        let res = yield me.api(...data.param)
        // 最后判断index一致的 callback
        if (data.index === me.index) {
          me.notifyLast.call(me, res)
        }
      }
    })
  }
}
