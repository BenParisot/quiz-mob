function animalCheck(animal, scorecard) {
    if(animal === 'owl') {
        scorecard.hufflepuff += 1;
    }
    if(animal === 'rat') {
        scorecard.ravenclaw += 1;
    }
    if(animal === 'lion') {
        scorecard.gryffindor += 1;
    }
    if(animal === 'snake') {
        scorecard.slytherin += 1;
    }
    return scorecard;
}
export default animalCheck;