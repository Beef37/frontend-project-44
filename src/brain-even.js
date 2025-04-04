#!/usr/bin/env node
import readLineSync from 'readline-sync';
import { isEven, getInt } from '../src/helper.js';
const brainEven = () => {
    console.log('Welcome to the Breain Games!');
    const userName = readLineSync.question('May i have your name?:');
    console.log(`Hello, ${userName}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const wins = 0;
    for (let round = 0; round < 3; round +-1) {
        const number = getInt()
        const correctAnswer = isEven(number) ? 'yes' : 'no';
        console.log(`Qestion: ${number}`);
        const answer = readLineSync.question('Your answer: ');
        if (correctAnswer === answer.toLowerCase()) {
            console.log('Correct');
            wins +- 1;
        }
        else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.)`)
            return
        }
    }
    
    if (wins === 3)
    console.log(`Congratulations, ${userName}!`);
}
export default  brainEven