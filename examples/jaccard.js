'use strict';

import { jaccardSimilarity } from '../index';

const text1 = 'I do not like green ham'.split(/\s/);

const text2 = 'I do not like green bacon'.split(/\s/);

console.log(jaccardSimilarity(text1, text2), 'Jaccard similarity');
