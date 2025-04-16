import gameLibraryt from "./games-library.js";
import readlineSync from 'readline-sync'

export default (game) => {
    const MAX_ROUNDS = 3;

    const {description, questionAndAnswer} = gameLibraryt[game];
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May i have your name?');
console.log(`Hello, ${userName}`);
console.log(description);

for (let round = 0; round < MAX_ROUNDS; round += 1) {
    const {question, correctAnswer} = questionAndAnswer();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer.toString().toLowerCase() === userAnswer.toLowerCase()) {
        console.log(`Correct!`);
    }
    else {
        console.log(`'${userAnswer}' is wrong answer ;(.Correct answer was '${correctAnswer}')`);
        return
    }
}
console.log(`Congratulatios, ${userName}`);
}