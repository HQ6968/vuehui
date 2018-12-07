let id = 0

export const ID = (prefix = 'id_') => {
  id++
  return prefix + id
}