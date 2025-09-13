//Creating squares
const squareSize = process.argv.slice(2);

if (!/^-?\d+$/.test(squareSize[0])){
    console.log("Missing size");
} else {//declaring a while loop
    let i = 0;

    while (i < squareSize[0]) {
        console.log("X".repeat(squareSize[0]));
             i++; 
    }
}