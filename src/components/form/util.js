import objectPath from 'object-path'

export const findForm = (vm , max = 10) => {
  for (let i = 0; i < max ; i++){
    if (vm.$parent.$el.nodeName === 'FORM') {
      return vm.$parent
    }
    vm = vm.$parent
  }
}

export const watchValue = (vm , propName) => {
  const form = vm.form || findForm(vm)
  //vm[propName] = form.model[vm.name]
  vm[propName] = objectPath.get(form.model, vm.name)
  vm.$watch(propName, function (newVal) {
    //form.model[vm.name] = newVal
    objectPath.set(form.model , vm.name , newVal)
  })

  form.$watch('model',{
    deep:true,
    handler:newVal => {
      //vm[propName] = newVal[vm.name]
      vm[propName] = objectPath.get(newVal, vm.name)
    }
  })
}


export const findChild = (vm , componentName) => {
  for (let i = 0 ; i < vm.$children.length ; i++) {
    const child = vm.$children[i]
    const name = child.$options._componentTag;
    if (name === componentName) {
      return child
    } else {
      const find = findChild(child ,componentName)
      if(find){
        return find
      }
    }
  }
}

export const findParent = (vm , componentName , max = 20) => {
  for (let i = 0; i < max ; i++){
    if (vm.$parent.$options._componentTag === componentName) {
      return vm.$parent
    }
    vm = vm.$parent
  }
}

// 获取最后一次请求的赋值
export const lastData = (api , dalay) => {



}

export const after = (seconds) => {
  return new Promise(resolve => setTimeout(v => resolve(v) , seconds * 1000))
}