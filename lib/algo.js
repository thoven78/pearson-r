'use strict';

import { intersection, union, round } from './helpers';

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
     sum2 += thisY;
     sumSq1 += Math.pow(thisX, 2);
     sumSq2 += Math.pow(thisY, 2);
     pSum += (thisX * thisY);
   }
   const n = a.length;
   const num = pSum - ((sum1 * sum2) / n);
   const pDen = (sumSq1 - (Math.pow(sum1, 2) / n)) * (sumSq2 - (Math.pow(sum2, 2) / n));
   // We have to guard against negetive number because JavaScript does not have a concerpt of imaginary number
   // so sqrt(-3) will yield NaN
   const den = Math.sqrt(Math.abs(pDen));

   if (den !== 0) return num / den;
   return 0.0;
 }

/**
 * Computes the Jaccard similarity
 * @param  {Array}  [aTri=[]] The first array
 * @param  {Array}  [bTri=[]] The second array
 * @return {Number} Jaccard similarity index
 */
export const jaccardSimilarity = (aTri = [], bTri = []) => {
  const intersect = intersection(aTri, bTri).length;
  const uni = union(aTri, bTri).size;
  return intersect / uni;
}

/**
 * Computes the euclidean distance between two list
 * @param  {Array}  [a=[]] the first list
 * @param  {Array}  [b=[]] the second list
 * @return {Number} the euclidean distance
 */
export const euclideanDistance = (a = [], b = []) => {
  let sumOfSquares = 0;
  for (let [index, value] of a.entries()) {
    sumOfSquares += Math.pow(value - b[index], 2);
  }
  const sqrt = Math.sqrt(sumOfSquares);
  return Number.isNaN(sqrt) ? 0 : 1.0 / ( 1 + sqrt);
}

/**
 * Calculates cosine similarity
 * @param  {Array}  [a=[]] [description]
 * @param  {Array}  [b=[]] [description]
 * @return {[type]}        [description]
 */
export const cosineSimilarity = (a = [], b = []) => {
  const squareRooted = (x) => {
    let sum = 0;
    for (let y of x) {
      sum += y * y;
    }
    return round(Math.sqrt(sum) || 0, 3);
  }

  let numerator = 0;

  for (let [index, value] of a.entries()) {
    numerator += value * b[index];
  }

  const denominator = squareRooted(a) * squareRooted(b);
  return round(numerator / denominator, 3);
}
