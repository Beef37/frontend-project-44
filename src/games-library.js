import gameEven from "./brain-even.js";
import gameCalc from "./brain-calc.js";

export default {
    'even' : {
        description: 'Answer "yes" if the number is even, otherwise answer "no".',
        questionAndAnswer: gameEven
    },
    'calc' : {
        description: 'Whst is result of the expression?',
        questionAndAnswer: gameCalc
    },
};