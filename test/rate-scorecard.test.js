const test = QUnit.test;

function rateScorecard(scorecard) {
    const gryffindor = scorecard.gryffindor;
    const hufflepuff = scorecard.hufflepuff;
    const slytherin = scorecard.slytherin;
    const ravenclaw = scorecard.ravenclaw;

    if(gryffindor > hufflepuff && gryffindor > slytherin && gryffindor > ravenclaw) {
        return 'Gryffindor';
    }
    if(hufflepuff > gryffindor && hufflepuff > slytherin && hufflepuff > ravenclaw) {
        return 'Hufflepuff';
    } 
    if(slytherin > hufflepuff && slytherin > gryffindor && slytherin > ravenclaw) {
        return 'Slytherin';
    }
    if(ravenclaw > hufflepuff && ravenclaw > slytherin && ravenclaw > gryffindor) {
        return 'Ravenclaw';
    }

}

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