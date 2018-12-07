import objectPath from 'object-path'

export const isFunction = (functionToCheck) => {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

export const isRowValue = (path, value) => param => {
  return objectPath.get(param.row, path) == value
}

export const numberFormat = (s, n, p, sep) => {
  p = p || "."
  sep = sep || ","
  n = n >= 0 && n <= 20 ? n : 2;
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  let l = s.split(".")[0].split("").reverse(),
    r = n == 0 ? '' : p + s.split(".")[1],
    t = "";
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? sep : "");
  }

  return t.split("").reverse().join("") + r;
}

