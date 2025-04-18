import { getInt } from "./helper.js";

export default () => {
    const startNumber = getInt();
    const progressionStep = getInt(10);
    const hiddenNum = getInt(10);
    const progression = generateProgression(startNumber, progressionStep);
    let correctAnswer = progression[hiddenNum];

    progression[hiddenNum] = "..";
    const question = progression.join(' ');

    correctAnswer = `${correctAnswer}`;
    return { question, correctAnswer };
}
function generateProgression(startNumber, progressionStep) {
    const progression = [];
    for (let i = 0; i < 10; i += 1) {
        const slogaemoe = progressionStep * i;
        progression.push(startNumber + slogaemoe);
    }
    return progression
}
