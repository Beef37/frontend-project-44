import readLineSync, { question } from "readline-sync"
import { getInt } from "../src/helper.js"

const brainCalc = () => {

    const operations = ['+', '-', '*'];
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
        const question = `Question: ${number1} ${operations[operationsIndex]} ${number2}`;
        return {question, correctAnswer};

    
}
export default brainCalc