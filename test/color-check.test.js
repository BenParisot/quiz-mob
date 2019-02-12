const test = QUnit.test;

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { gryffindor: 0, slytherin: 0, hufflepuff: 0, ravenclaw: 0 };
});

function colorCheck(color, scorecard) {
    if(color === 'yellow') {
        scorecard.hufflepuff += 1;
    }
    if(color === 'red') {
        scorecard.gryffindor += 1;
    }
    if(color === 'green') {
        scorecard.slytherin += 1;
    }
    if(color === 'blue') {
        scorecard.ravenclaw += 1;
    }
    return scorecard;
}

test('Add 1 to Hufflepuff if color is yellow', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, hufflepuff: 1, ravenclaw: 0 };
    const result = colorCheck('yellow', scorecard);

    assert.deepEqual(result, expected);
});

test('Add 1 to Gryffindor if color is red', function(assert) {
    const expected = { gryffindor: 1, slytherin: 0, hufflepuff: 0, ravenclaw: 0 };
    const result = colorCheck('red', scorecard);

    assert.deepEqual(result, expected);
});

test('Add 1 to Slytherin if color is green', function(assert) {
    const expected = { gryffindor: 0, slytherin: 1, hufflepuff: 0, ravenclaw: 0 };
    const result = colorCheck('green', scorecard);

    assert.deepEqual(result, expected);
});

test('Add 1 to Ravenclaw if color is blue', function(assert) {
    const expected = { gryffindor: 0, slytherin: 0, hufflepuff: 0, ravenclaw: 1 };
    const result = colorCheck('blue', scorecard);

    assert.deepEqual(result, expected);
});