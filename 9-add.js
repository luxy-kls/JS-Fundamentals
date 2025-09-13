//Performing simple addition from user input
const args = process.argv.slice(2);

//providing conditional statement
if (!/^-?\d+$/.test(args[0]) || !/^-?\d+$/.test(args[1])){
    console.log("NaN");
} else {
     // converting the integers to string
     const num1 = Number(args[0]);
     const num2 = Number(args[1]);

     //declearing a function for summation
     function add(a, b){
        return a + b;
    }
    console.log(add(num1, num2));
}