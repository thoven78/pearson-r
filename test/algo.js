'use strict';

import assert from 'assert';

import { pearsonR, jaccardSimilarity, euclideanDistance, cosineSimilarity } from '../lib/algo';

describe('#pearsonR', () => {
  it('should compute a correlation between two data sets', (done) => {
    const data1 = [3, 4, 5, 6, 7];
    const data2 = [5, 6, 7, 8, 9];
    assert.equal(pearsonR(data1, data2), 1);
    done();
  });
});

describe('#jaccardSimilarity', () => {
  it('should return jaccard\'s similarity', (done) => {
    const a = [0, 1, 2];
    const b = [1, 2, 3];
    assert.deepEqual(jaccardSimilarity(a, b), 0.5);
    done();
  });
});

describe('#euclideanDistance', () => {
  it('should computes the euclidean distance between two lists', (done) => {
    const a = [0, 3, 4, 5];
    const b = [7, 6, 3, -1];
    assert.deepEqual(euclideanDistance(a, b), 9.746794344808963);
    done();
  });
});

describe('#cosineSimilarity', () => {
  it('should computes the cosine similarity between two lists', (done) => {
    const a = [0, 3, 4, 5];
    const b = [7, 6, 3, -1];
    assert.deepEqual(cosineSimilarity(a, b), 0.363);
    done();
  });
});
