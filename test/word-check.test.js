const test = QUnit.test;
import descriptorCheck from '../src/result/calculate/descriptor-check.js';
let scorecard = null;

QUnit.testStart(function() {
    scorecard = { gryffindor: 0, slytherin: 0, hufflepuff: 0, ravenclaw: 0 };
});



test('add one to Gryffindor if "loyal" is checked', function(assert) {
    const expected = { gryffindor: 1, slytherin: 0, hufflepuff: 0, ravenclaw: 0 };
    const result = descriptorCheck('loyal', scorecard);
    assert.deepEqual(result, expected);
});

test('add one to Slytherin if "cunning" is checked', function(assert) {
    const expected = { gryffindor: 0, slytherin: 1, hufflepuff: 0, ravenclaw: 0 };
    const result = descriptorCheck('cunning', scorecard);
    assert.deepEqual(result, expected);
});
test('add one to Ravenclaw if "intellectual" is checked', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, hufflepuff: 0, ravenclaw:  1 };
    const result = descriptorCheck('intellectual', scorecard);
    assert.deepEqual(result, expected);
});
test('add one to Hufflepuff if "earnest" is checked', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, hufflepuff: 1, ravenclaw:  0 };
    const result = descriptorCheck('earnest', scorecard);
    assert.deepEqual(result, expected);
});