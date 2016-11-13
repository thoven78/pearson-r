'use strict';

import { cosineSimilarity } from '../index';

const text1 = 'I do not like green ham'.split(/\s/).map(x => x.length);

const text2 = 'I do not like green bacon'.split(/\s/).map(x => x.length);

console.log(cosineSimilarity(text1, text2), 'cosineSimilarity similarity');
