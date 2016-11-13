'use strict';

/**
 * Returns intercections between to list
 * @param  {Array} a an array of items
 * @param  {Array} b an array of items
 * @return {Array} a list of the commond items
 */
export const intersection = (a, b) => a.filter(el => b.includes(el));

export const generateData = (length, spread = 5) => {
  let data = [];

  for (let i = 0; i < length; i++) {
    data[i] = (Math.random() * spread) + 1 | 0;
  }
  return data;
}
/**
 * @param  {Array[]}  data an array of objects
 * @param  {String}  key the key to search for
 * @param  {Boolean}  bool should return a boolean ?
 * @return {Boolean|Object} mixed and object or boolean
 */
export const has = (data, key, bool) => {
  const local = data.filter(el => Object.keys(el)[0] == key);
  if (bool) return local.length > 0
  return local[0];
}

/**
 * Returns a value
 * @param  {Object} data an object
 * @return {Any} a value of an object key
 */
export const getValue = (data) => {
  for (let key in data) {
    return data[key];
  }
}

/**
 * Returns values from a list of objects
 * @param  {Array} list a list of objects
 * @return {Array} an array of values
 */
export const getValues = (list) => {
  return list.map(x => getValue(x));
}
