import { getInt, isEven } from "../src/helper.js";

export default () => {
    console.log('Welcome to the Breain Games!');
    const userName = readLineSync.question('May i have your name?:');
    console.log(`Hello, ${userName}`);
    console.log('Find the greatest common divisor of given numbers.');
    const wins = 0;



    
    const number1 = getInt();
    const number2 = getInt();

    const correctAnwswer = isEven(nummer) ? 'yes' : 'no';

    const question = `Question ${number1} ${number2}`;
    return {question, correctAnwswer};
};