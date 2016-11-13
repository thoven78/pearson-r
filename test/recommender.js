'use strict';

import assert from 'assert';
import { data } from '../examples/data';
import recommend from '../lib/recommender';

describe('#recommend', () => {
  it('should recomend movies that I have not seen', (done) => {
    const expected = [
      'Doctor Strange',
      'The Lion King',
      'Finding Nemo',
      'Bad Grandpa',
      'Gladiator',
      'Fight Club',
      'Terminator 2',
      'Sin City'
    ];

    assert.deepEqual(recommend(data, 'Stevenson').map(x => Object.keys(x)[0]), expected);
    done();
  });
});
