/*class loops{

constructor() {
    let a3 : number =20;
    while (a3 > 0) {
        console.log("a3 is: " + a3);
        a3--;
    }}


}
let loops1 = new loops();*/


class loops2{

constructor() {

    for (let a4 = 4; a4 < 40; a4++)

{
    if (a4 == 30) {
        console.log("a4 is: " + a4);
        break;
    }
    console.log("a4 is: " + a4);
}
        
    }
        }   let loops2_1 = new loops2();





        class loops3{

            constructor() {
                for (let a6 = 5; a6 <= 20; ++a6) {
                     if (a6 % 5 ==0) {
                        console.log(" Number is divided by 5 : " + a6);
                     }
                }
            }
         }   let loops3_1 = new loops3();


          class loops4{

            constructor() {
                for (let a6 = 5; a6 <= 20; ++a6) {
                     if (a6 % 2 !==0) {
                        console.log(" Number is not divided by 2 : " + a6);
                     }
                }
            }
         }   let loops4_1 = new loops4();
                    
                    
          class loops5{

            constructor() {
                for (let a6 = 0; a6 <= 10; ++a6) {
                     
                        console.log( "5 * " +a6 + "=" + (5 * a6));  
                     
                }
            }
         }   let loops5_1 = new loops5();

         class loops6{

            constructor() {
                for (let a6 = 0; a6 <= 5; ++a6) {
                     
                        console.log( " * ".repeat(a6));
                     
                }
            }
         }   let loops6_1 = new loops6();