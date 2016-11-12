'use strict';

import {
  intersection,
  generateData,
  has,
  getValues,
  getValue
} from '../lib/helpers'
import assert from 'assert'

const data = [{test: 1}, {test1: null}];

describe('#intersection', () => {
  it('should return the intersections between two list', () => {
    assert.deepEqual(intersection([1, 2, 4, 5], [2, 4, 5, 6]), [2, 4, 5]);
  });
});

describe('#intersection', () => {
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
