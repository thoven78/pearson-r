'use strict';

import assert from 'assert';
import { data } from '../examples/data';
import recommend from '../lib/recommender';
import { jaccardSimilarity } from '../lib/algo';

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

  it('should recomend movies that I have not seen using #jaccardSimilarity', (done) => {
    const expected = [
      'Bad Grandpa',
      'Gladiator',
      'Doctor Strange',
      'Finding Nemo',
      'Inferno',
      'Fight Club',
      'Terminator 2',
      'The Lion King',
      'Forrest Gump',
      'Men in Black',
      'Braveheart',
      'Full Metal Jacket',
      'Jaws',
      'Popstar: Never Stop Never Stopping',
      'Sin City'
    ];

    assert.deepEqual(recommend(data, 'Stevenson', jaccardSimilarity).map(x => Object.keys(x)[0]), expected);
    done();
  });
});
