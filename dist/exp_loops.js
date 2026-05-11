/*class loops{

constructor() {
    let a3 : number =20;
    while (a3 > 0) {
        console.log("a3 is: " + a3);
        a3--;
    }}


}
let loops1 = new loops();*/
class loops2 {
    constructor() {
        for (let a4 = 4; a4 < 40; a4++) {
            if (a4 == 30) {
                console.log("a4 is: " + a4);
                break;
            }
            console.log("a4 is: " + a4);
        }
    }
}
let loops2_1 = new loops2();
export {};
