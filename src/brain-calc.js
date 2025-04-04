#!/usr/bin/env node

import readLineSync, { question } from "readline-sync"
import { getInt } from "../src/helper.js"

const brainCalc = () => {
    console.log('Welcome to the Breain Games!');
    const userName = readLineSync.question('May i have your name?:');
    console.log(`Hello, ${userName}`);
    console.log('What is the result of the expression?');
    const wins = 0;
    const operations = ['+', '-', '*'];
    for (let round = 0; round < 3; round += 1) {
        const number1 = getInt(100);
        const number2 = getInt(100);
        let operationsIndex = getInt(3);
        let correctAnswer;

        switch (operationsIndex) {
            case 0:
                correctAnswer = number1 + number2;
                break;
            case 1:
                correctAnswer = number1 - number2;
                break;
            case 2:
                correctAnswer = number1 * number2;
                break;

        }
        console.log(`Question: ${number1} ${operations[operationsIndex]} ${number2}`)
        const userAnswer = parseInt(readLineSync.question("Your answer: "))
        if (userAnswer === correctAnswer) {
            console.log("Correct!")
        }
        else{

         console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
         return
        }
    }
    console.log(`Congratulations, ${userName}!`)
}
export default brainCalc