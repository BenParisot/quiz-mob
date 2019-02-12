const test = QUnit.test;
// import descriptorCheck from '../src/result/calculate/descriptor-check.js';
// import animalCheck from '../src/result/calculate/animal-check.js';
// import colorCheck from '../src/result/calculate/color-check.js';
// import rateScorecard from '../src/result/calculate/rate-scorecard.js';

import calculateResult from '../src/result/result.js';

test('if griffyndor has the highest total, return Gryffindor', function(assert) {
    const answers = { descriptor: 'loyal', color: 'red', animal: 'lion' };
    const expected = 'Gryffindor';
    const result = calculateResult(answers);

    assert.equal(result, expected);
});
test('if slytherin has the highest total, return Slytherin', function(assert) {
    const answers = { descriptor: 'cunning', color: 'green', animal: 'lion' };
    const expected = 'Slytherin';
    const result = calculateResult(answers);

    assert.equal(result, expected);
});
test('if hufflepuff has the highest total, return Hufflepuff', function(assert) {
    const answers = { descriptor: 'earnest', color: 'yellow', animal: 'owl' };
    const expected = 'Hufflepuff';
    const result = calculateResult(answers);

    assert.equal(result, expected);
});
test('if ravenclaw has the highest total, return Ravenclaw', function(assert) {
    const answers = { descriptor: 'intellectual', color: 'blue', animal: 'rat' };
    const expected = 'Ravenclaw';
    const result = calculateResult(answers);

    assert.equal(result, expected);
});