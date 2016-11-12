'use strict';

import {
  intersection,
  generateData,
  has,
  getValues,
  getValue
} from './helpers';

/**
 * Calculates the pearson r correlations between two data sets
 * @param  {Array} a the first data set
 * @param  {Array} b the second data set
 * @return {Number} a pearson correlation or 0
 */
export const pearsonR = (a, b) => {
  let sum1 = 0;
  let sum2 = 0;
  let sumSq1 = 0;
  let sumSq2 = 0;
  let pSum = 0;

  for (let [index, thisX] of a.entries()) {
    let thisY = b[index];
    sum1 += thisX;
    sum2 += thisX;

    sumSq1 += Math.pow(thisX, 2);
    sumSq2 += Math.pow(thisY, 2);
    pSum += (thisX * thisY);
  }
  const n = a.length;
  const num = pSum - ((sum1 * sum2) / n);
  const den = Math.sqrt((sumSq1 - Math.pow(sum1, 2) / n) * (sumSq2 - Math.pow(sum2, 2) / n));

  if (den !== 0) return num / den;
  return 0.0;
}

/**
 * Recomends an item based on a given data an a key
 * @param  {Object} data an object with values of Array[] key value pair
 * @param  {String} key  [description]
 * @return {Array[]} an array of key values
 */
export const recomend = (data, key) => {
  let totals = Object.create(null);
	let sumsOfSimularities = Object.create(null);
	for (let thisKey in data) {
    // don't compare if item is equal to key
    if (thisKey == key) continue
    let simularity = pearsonR(getValues(data[key]), getValues(data[thisKey]));
    // ignore scores if ≤ zero
    if (simularity <= 0 || Number.isNaN(simularity)) continue

    for (let item of data[thisKey]) {
      let currentKey = Object.keys(item)[0]
      // only scores items I don't have
      if (!has(data[key], currentKey, true) || has(data[key], currentKey) == 0) {
        if (!totals[currentKey]) {
          totals[currentKey] = 0;
        }
        totals[currentKey] += item[currentKey] * simularity;
        if (!sumsOfSimularities[currentKey]) {
          sumsOfSimularities[currentKey] = 0;
        }
        sumsOfSimularities[currentKey] += simularity;
      }
    }
  }

  const rankings = [];

  for (let item in totals) {
    rankings.push({[item]: (totals[item] / sumsOfSimularities[item])});
  }
  // Sort rankings based on the highest correlation values
  rankings.sort((a, b) => getValue(a) < getValue(b));

  return rankings;
};
