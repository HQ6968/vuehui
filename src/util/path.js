export const isHttpUrl = (path) => {
  return path.substr(0 , 7) === 'http://' || path.substr(0 , 8) === 'https://'
}

export const pathIsHas = (path, map = {}) => {
  if (map.hasOwnProperty(path)) {
    return path;
  }

  let new_path = path.split("?").shift();
  if (map.hasOwnProperty(new_path)) {
    return new_path;
  }

  while (new_path.lastIndexOf("/") > 0) {
    new_path = new_path.substr(0, new_path.lastIndexOf("/"))
    if (map.hasOwnProperty(new_path)) {
      return new_path;
    }
  }

  return new_path
}