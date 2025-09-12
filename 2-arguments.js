//Receiving Arguments from the command line
const argCount=process.argv.slice(2).length;

//console.log(args);

if(argCount === 0){
    console.log("No argument");
} else if(argCount === 1){
    console.log("Argument found");
} else {
    console.log("Arguments found");
}

