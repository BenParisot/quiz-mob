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

export default colorCheck;