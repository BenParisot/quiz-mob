const test = QUnit.test;
import rateScorecard from '../src/result/calculate/rate-scorecard.js';

test('if answer.Gryffindor is higest, then return Gryffindor', function(assert) {
    const scorecard = { gryffindor: 1, slytherin: 0, hufflepuff: 0, ravenclaw: 0 };
    const expected = 'Gryffindor';
    const result = rateScorecard(scorecard);
    assert.equal(result, expected);

});

test('if answer slytherin is higest, then return slythgein', function(assert) {
    const scorecard = { gryffindor: 0, slytherin: 1, hufflepuff: 0, ravenclaw: 0 };
    const expected = 'Slytherin';
    const result = rateScorecard(scorecard);
    assert.equal(result, expected);

});

test('if answer.Hufflepuff is higest, then return Hufflepuff', function(assert) {
    const scorecard = { gryffindor: 0, slytherin: 0, hufflepuff: 1, ravenclaw: 0 };
    const expected = 'Hufflepuff';
    const result = rateScorecard(scorecard);
    assert.equal(result, expected);

});

test('if answer.Ravenclaw is higest, then return Ravenclaw', function(assert) {
    const scorecard = { gryffindor: 0, slytherin: 0, hufflepuff: 0, ravenclaw: 1 };
    const expected = 'Ravenclaw';
    const result = rateScorecard(scorecard);
    assert.equal(result, expected);

});