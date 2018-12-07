import {Modal} from 'iview'

export const confirm = (options) => {
  return new Promise((resolve) => {
    Modal.confirm({
      title:'提示',
      ...options,
      onOk:() => resolve(1),
      onCancel:() => resolve(0)
    })
  })
}