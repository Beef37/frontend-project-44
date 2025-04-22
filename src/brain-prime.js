#!/usr/bin/env node
import {getInt } from '../src/helper.js';
const brainPrime = () => {
    const number = getInt()
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    const question = `Qestion: ${number}`;
    return { question, correctAnswer };
}
const isPrime = (num) => {
    const koren = Math.sqrt(num)
    for (let i = 2; i <= koren; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
export default brainPrime