import readlineSync from 'readline-sync';
const greetUser = () => {
    console.log('welcome to the brain games');
    const name = readlineSync.question('May i have your name?');
    console.log(`Helo ${name}!`);
};
export default greetUser;