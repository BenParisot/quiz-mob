function descriptorCheck(descriptor, scorecard) {
    if(descriptor === 'loyal') {
        scorecard.gryffindor += 1;
    }
    if(descriptor === 'cunning') {
        scorecard.slytherin += 1;
    }
    if(descriptor === 'intellectual') {
        scorecard.ravenclaw += 1;
    }
    if(descriptor === 'earnest') {
        scorecard.hufflepuff += 1;
    }
    return scorecard;
}

export default descriptorCheck; 