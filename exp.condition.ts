class condition {
    a : number = 10; 
    constructor() {
    if (this.a <= 10) {
        console.log("a is less than or equal to 10");
    } }
}
let condition1 = new condition();



class condition2 { 
    constructor()
{ let num = Number(prompt("Enter a number: "));

     if (num %5 == 0) {
        console.log("The number is divisible by 5");
    } else {
        console.log("The number is not divisible by 5");
    }

}

}
let condition2_1 = new condition2();
