'use strict';

import {
  intersection,
  generateData,
  has,
  getValues,
  getValue,
  union,
  round,
  zip,
  normalize
} from '../lib/helpers'
import assert from 'assert';

const data = [{test: 1}, {test1: null}];

describe('#intersection', () => {
  it('should return the intersections between two list', () => {
    assert.deepEqual(intersection([1, 2, 4, 5], [2, 4, 5, 6]), [2, 4, 5]);
  });
});

describe('#generateData', () => {
  it('should return a list with speudo random values', () => {
    assert.equal(generateData(5).length, 5);
  });
});

describe('#has', () => {
  it('should return a true', () => {
    assert.equal(has(data, 'test', true), true);
  });

  it('should return a false', () => {
    assert.equal(has(data, 'test3', true), false);
  });

  it('should return an object', () => {
    assert.deepEqual(has(data, 'test'), data[0]);
  });
});

describe('#getValues', () => {
  it('should return a list of values', () => {
    assert.deepEqual(getValues(data), [1, null]);
  });
});

describe('#getValue', () => {
  it('should return a value for a given object', () => {
    assert.equal(getValue(data[0]), 1);
  });
});

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

describe('#union', () => {
  it('should return a | b', () => {
    assert.deepEqual(union(a, b), new Set([1, 2, 3, 4, 5, 6]));
  });
});

describe('#round', () => {
  it('should round numbers from a given precision', () => {
    assert.deepEqual(round(3.14, 1), 3.1);
  });
});

describe('#zip', () => {
  it('should zip two arrays', () => {
    assert.deepEqual(zip(a, b), a.concat(b));
  });
});

describe('#normalize', () => {
  it('should normalize a data', () => {
    assert.deepEqual(normalize(1, 3), [0, 0]);
    assert.deepEqual(normalize(1, 3, 2), [2, 2]);
  });
});
