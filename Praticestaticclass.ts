class pratice {
    //a =9;   //property    
    private add1(): number {
        let a = 60;  //variable only in method or function
        let b = 80;
        return a + b;
    }

    static multiple(): void {
        let c = 4;
        let d = 5;
        console.log(c * d);
    }

    static subtract(): number {

        let t = 34;
        let s = 22;

        return t - s;

    }
    static callsub(): void {

        console.log(pratice.subtract());

    }


    calladd1(): void {

        console.log(this.add1());

    }

}
const pobj = new pratice();
//pobj.add1();
//console.log(pobj.add1());
//pobj.multiple();

pratice.callsub();
pobj.calladd1();




class Marks {

    nums(): void {

        let marks = 91;

        if (marks >= 90 && marks <= 100) {
            console.log("Pass");

        }
        else if (marks >= 80) {
            console.log("Average");
        }

        else {
            console.log("Fail");


        }


    }




} const objmark = new Marks();
objmark.nums();