import gameEven from "../src/brain-even.js";
import gameCalc from "../src/brain-calc.js";
import gameGcd from "../src/brain-gcd.js";

export default {
    'even' : {
        description: 'Answer "yes" if the number is even, otherwise answer "no".',
        questionAndAnswer: gameEven
    },
    'calc' : {
        description: 'What is result of the expression?',
        questionAndAnswer: gameCalc
    },
    'gcd' : {
        description: 'Find the greatest common divisor of given numbers.',
        questionAndAnswer: gameGcd
    },
};