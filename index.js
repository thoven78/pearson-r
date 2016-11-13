'use strict';

import { pearsonR, jaccardSimilarity, cosineSimilarity } from './lib/algo';

import { generateData, intersection, round } from './lib/helpers';

import recommend from './lib/recommender';

export { pearsonR, jaccardSimilarity, generateData, intersection, cosineSimilarity, round };

export default recommend;
