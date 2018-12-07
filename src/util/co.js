import co from 'co'
import {errHandle} from './err'
import {Message} from 'iview'

const coProcess = (fn, conf = {isNavBack: false, isUseLoading: true, errHandle: null}) => {

  let closeLoading = Message.loading({content:'加载中...',duration: 0})
  co(function* () {
    yield fn()
    conf.isUseLoading && closeLoading()
  }).catch(e => {
    conf.isUseLoading && closeLoading()
    co(function* () {
      if (conf.errHandle) {
        yield conf.errHandle(e)
      }
    })
  })
}


export class Processer {
  _isUseLoading = false
  _errHandler = null
  _onErrEnd = null

  static instance() {
    const p = new Processer()
    p.loading(true)
    p.errHandler(errHandle)
    return p
  }

  co(fn) {
    const me = this
    let closeLoading = Message.loading({content:'加载中...',duration: 0})
    co(function* () {
      yield fn()
      me._isUseLoading && closeLoading()
    }).catch(e => {
      me._isUseLoading && closeLoading()
      co(function* () {
        if (me._errHandler) {
          yield me._errHandler(e)
        }
        if (me._onErrEnd) {
          yield me._onErrEnd(e)
        }
      })
    })
    return this
  }

  loading(isLoading = true) {
    this._isUseLoading = isLoading
    return this
  }

  errHandler(fn = null) {
    this._errHandler = fn
    return this
  }

  onErrEnd(fn) {
    this._onErrEnd = fn
    return this
  }
}


export const Process = (fn) => coProcess(fn, {isNavBack: false, isUseLoading: true, errHandle})