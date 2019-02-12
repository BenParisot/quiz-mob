import descriptorCheck from './calculate/descriptor-check.js';
import animalCheck from './calculate/animal-check.js';
import colorCheck from './calculate/color-check.js';
import rateScorecard from './calculate/rate-scorecard.js';

function calculateResult(answers) {
    const scorecard = { gryffindor: 0, slytherin: 0, hufflepuff: 0, ravenclaw: 0 };
    animalCheck(answers.animal, scorecard);
    colorCheck(answers.color, scorecard);
    descriptorCheck(answers.descriptor, scorecard);
    const result = rateScorecard(scorecard);
    return result;
}

export default calculateResult;