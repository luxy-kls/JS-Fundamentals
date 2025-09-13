const numOfTimes = process.argv.slice(2);

//assigning condition
if (!/^-?\d+$/.test(numOfTimes[0])){
    console.log("Missing number of occurrences");
} else {//declaring a while loop
    let i = 0;

    while (i < numOfTimes[0]) {
        console.log("C is fun");
             i++; 
    }
}
