import animalCheck from '../src/result/calculate/animal-check.js';
const test = QUnit.test;

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { gryffindor: 0, slytherin: 0, hufflepuff: 0, ravenclaw: 0 };
});


test('add one to Hufflepuff if owl is chosen', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, hufflepuff: 1, ravenclaw: 0 };
    const result = animalCheck('owl', scorecard);

    assert.deepEqual(result, expected);
});
test('add one to Ravenclaw if rat is chosen', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, hufflepuff: 0, ravenclaw: 1 };
    const result = animalCheck('rat', scorecard);

    assert.deepEqual(result, expected);
});
test('add one to Gryffindor if lion is chosen', function(assert) {
    const expected = { gryffindor: 1, slytherin: 0, hufflepuff: 0, ravenclaw: 0 };
    const result = animalCheck('lion', scorecard);

    assert.deepEqual(result, expected);
});
test('add one to Slytherin if snake is chosen', function(assert) {
    const expected = { gryffindor: 0, slytherin: 1, hufflepuff: 0, ravenclaw: 0 };
    const result = animalCheck('snake', scorecard);

    assert.deepEqual(result, expected);
});