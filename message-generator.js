//Goal: create a message that says "You are a BLANK person!". Where BLANK will be randomized to a positive word.

let wordList = ['amazing', 'brilliant', 'charming','diligent', 'enchanting', 'fantastic', 'gregarious', 'honest', 'insightful', 'kooky', 'laid-back'];
let randomIndex = Math.floor(Math.random() * (wordList.length - 1));

console.log(`You are a ${wordList[randomIndex]} person!`)
