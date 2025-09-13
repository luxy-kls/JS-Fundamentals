//Factorials
const argFac = process.argv.slice(2);

if (!/^-?\d+$/.test(argFac[0])){
        console.log(1);
}  else{
    const numIn = Number(argFac[0]);

    //function of factorial

    function factorial(num){
        let i = 1;
        for (let x = 1 ;x <= num ; x++){
             i *= x;
        }
        return i;
    }
    console.log(factorial(numIn));
}
