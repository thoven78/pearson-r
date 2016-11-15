'use strict';

import assert from 'assert';
import { data } from '../examples/data';
import recommend from '../lib/recommender';

describe('#recommend', () => {
  it('should recomend movies that I have not seen', (done) => {
    const expected = [
      'Fight Club',
      'Men in Black',
      'Doctor Strange',
      'Full Metal Jacket',
      'Finding Nemo',
      'The Lion King',
      'Bad Grandpa',
      'Braveheart',
      'Terminator 2',
      'Gladiator',
      'Sin City'
    ];

    assert.deepEqual(recommend(data, 'Stevenson').map(x => Object.keys(x)[0]), expected);
    done();
  });
});
