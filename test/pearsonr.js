'use strict';

import assert from 'assert';

import { data } from '../examples/data'
import { pearsonR, recomend } from '../lib/pearsonr';

describe('#pearsonR', () => {
  it('should compute a correlation between two data sets', (done) => {
    const data1 = [3, 4, 5, 6, 7];
    const data2 = [5, 6, 7, 8, 9];
    assert.equal(pearsonR(data1, data2), 1.6641005886756874);
    done();
  });
});

describe('#recomend', () => {
  it('should recomend movies that I have not seen', (done) => {
    const expected = ['Doctor Strange', 'Forrest Gump', 'Finding Nemo', 'Bad Grandpa', 'The Lion King', 'Fight Club', 'Gladiator', 'Terminator 2', 'Jaws', 'Sin City']
    assert.deepEqual(recomend(data, 'Stevenson').map(x => Object.keys(x)[0]), expected);
    done();
  });
});
