'use strict';
import { pearsonR } from './algo';
import {
  intersection,
  generateData,
  has,
  getValues,
  getValue,
  union
} from './helpers';

/**
 * Recomends an item based on a given data an a key
 * @param  {Object} data an object with values of Array[] key value pair
 * @param  {String} key  [description]
 * @return {Array[]} an array of key values
 */
const recommend = (data, key) => {
  let totals = Object.create(null);
  let sumsOfSimilarities = Object.create(null);

  for (let thisKey in data) {
    // don't compare if item is equal to key
    if (thisKey == key) continue

    let x = getValues(data[key]);
    let y = getValues(data[thisKey]);
    // normalize the data so that x.lenght == y.length
    y = [...union(y, x)];
    x = [...union(x, y)];

    let similarity = pearsonR(x, y);

    // ignore scores if ≤ zero
    if (similarity <= 0 || Number.isNaN(similarity)) continue

    for (let item of data[thisKey]) {
      let currentKey = Object.keys(item)[0]
      // only scores items I don't have
      if (!has(data[key], currentKey, true) || has(data[key], currentKey) == 0) {
        if (!totals[currentKey]) {
          totals[currentKey] = 0;
        }
        totals[currentKey] += item[currentKey] * similarity;
        if (!sumsOfSimilarities[currentKey]) {
          sumsOfSimilarities[currentKey] = 0;
        }
        sumsOfSimilarities[currentKey] += similarity;
      }
    }
  }

  const rankings = [];

  for (let item in totals) {
    rankings.push({[item]: (totals[item] / sumsOfSimilarities[item])});
  }
  // Sort rankings based on the highest correlation values
  rankings.sort((a, b) => getValue(a) < getValue(b));

  return rankings;
};

export default recommend;