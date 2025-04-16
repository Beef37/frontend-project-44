#!/usr/bin/env node
import readLineSync from 'readline-sync';
import { isEven, getInt } from '../src/helper.js';
const brainEven = () => {
    const number = getInt()
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const question = `Qestion: ${number}`;
    return { question, correctAnswer };
}
export default brainEven