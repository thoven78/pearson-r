import recomend, { generateData, intersection, pearsonR } from '../index';
import { data } from './data'

const correlation = () => {
  const data1 = generateData(5, 10);
  const data2 = generateData(5, 10);

  const overlap = intersection(data1, data2);

  if (overlap.length < 1) return 0;

  return pearsonR(data1.slice(0, overlap.length), overlap);
}

console.log(correlation(), 'correlation test');

console.log(recomend(data, 'Al'), 'Recommendations for Al');
