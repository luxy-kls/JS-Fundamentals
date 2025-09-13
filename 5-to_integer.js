//A script that prints converts my first argument to an integer

let argInt = process.argv.slice(2);


// checking if the first argument is an integer
if(!/^-?\d+$/.test(argInt[0])){
    console.log("Not a number");
}  else {
    console.log(`My number: ${argInt[0]}`);
}