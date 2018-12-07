import {after} from "./time";
import co from "co";

export class DelayCall {
  handler
  api
  index = 0

  static instance(handler){
    let o =  new DelayCall()
    o.handler = handler
    return o
  }

  push(param) {
    this.addIndex()
    this.do(param)
  }

  addIndex(){
    this.index++
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
        me.handler.call(me, param)
      }
    })
  }
}