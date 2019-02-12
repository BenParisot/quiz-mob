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
export default rateScorecard;