import gameEven from "../src/brain-even.js";
import gameCalc from "../src/brain-calc.js";
import gameGcd from "../src/brain-gcd.js";
import gameProgression from "../src/brain-progression.js";

export default {
    'even' : {
        "description": 'Answer "yes" if the number is even, otherwise answer "no".',
        "questionAndAnswer": gameEven
    },
    'calc' : {
        "description": 'What is result of the expression?',
        "questionAndAnswer": gameCalc
    },
    'gcd' : {
        "description": 'Find the greatest common divisor of given numbers.',
        "questionAndAnswer": gameGcd
    },

    'progression' : {
        "description": 'What number is missing in the progression?',
        "questionAndAnswer": gameProgression
    },
};