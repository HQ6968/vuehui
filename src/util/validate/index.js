import {get} from "../maping";

export const required = (message) => {
  return {required: true, message: message, trigger: 'blur'}
}

export const email = () => {
  return {type: 'email', message: '无效的邮箱格式', trigger: 'blur'}
}

export const pattern = (patt, massage) => {
  return {
    type: "string",
    pattern: patt,
    message: massage,
    trigger: 'blur'
  }
}

//{ required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
//{type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }

export const unEmptyArray = (message) => {
  return {
    required: true,
    type: "array",
    message: message,
    trigger: 'change',
    validator(rule, value, callback) {
      //console.log("value" , value)
      if (value.length < 1) {
        callback(rule.message)
      } else {
        callback()
      }
    },
  }
}

// 验证相等
export const equal = (data, key, message) => {
  return {
    required: true,
    message: message,
    validator(rule, value, callback) {
      if (value !== get(data, key)) {
        callback(rule.message)
      } else {
        callback();
      }
    }
  }
}

// 验证不能相等
export const notEqual = (data, key, message) => {
  return {
    required: true,
    message: message,
    validator(rule, value, callback) {
      if (value === get(data, key)) {
        callback(rule.message)
      } else {
        callback();
      }
    }
  }
}

export const makeValidate = (data) => {
  let rs = {}
  for (let k in data) {
    const arr = data[k]
    let label = k
    let tmp = []
    arr.forEach(v => {
      if (typeof v === 'string') {
        label = v
        return
      }
      if ([required, unEmptyArray].includes(v)) {
        tmp.push(v(`${label}必须`))
        return
      }

      if (v === email) {
        tmp.push(email())
        return
      }
      tmp.push(v)
    })
    rs[k] = tmp
  }
  return rs
}