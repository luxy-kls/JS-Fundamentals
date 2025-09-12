// experimenting with arguments part 2
// declaring variable
const argIn = process.argv.slice(2);

if(argIn[0] === undefined){
    console.log("No argument");
} else {
console.log(argIn[0]);
}