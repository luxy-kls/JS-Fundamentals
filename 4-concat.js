//Writing a script that prints 
// two arguments passed to it, and concatenates them with 'is'

const argConcat = process.argv.slice(2);

console.log(`${argConcat[0]} is ${argConcat[1]}`);