import objectPath from 'object-path'

export const mapArray = (array, fn) => {
  let items = [];
  array.forEach(value => items.push(fn(value)));
  return items;
}

export const get = (array, key, defaultValue) => {
  return objectPath.get(array, key, defaultValue)
}

export const set = (array, value) => {
  return objectPath.set(array, value)
}

export const password = len => {
  len = len || 32;
  let pwd = "",
    chars = 'ABDEFGHNPQRTYabdefhnprty2345678',
    maxPos = chars.length;
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }

  return pwd;
}