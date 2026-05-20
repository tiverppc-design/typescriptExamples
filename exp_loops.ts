/*class loops{

constructor() {
    let a3 : number =20;
    while (a3 > 0) {
        console.log("a3 is: " + a3);
        a3--;
    }}


}
let loops1 = new loops();


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
         }   let loops6_1 = new loops6(); */





         class employee{
            constructor(){

                let salary = [100030, 200020, 45002, 65002, 10000];
                let minSalary = salary[0];
                let expense = 0;
                let income = 550000;
                let maxSalary = salary[0];
                for (let i = 1; i < salary.length; i++) {
                    if (salary[i] < minSalary) {
                        minSalary = salary[i];
                    }
                    if (salary[i] > maxSalary) {
                        maxSalary = salary[i];  
                    }
                }
                console.log("Minimum salary is: " + minSalary);
                console.log("Maximum salary is: " + maxSalary);

                for (let i = 0; i < salary.length; i++) {
                    expense = expense + salary[i];
                }
                console.log("Total expense is: " + expense);    
        
                let profit = income - expense;
                  if (profit > 0) {
                    console.log("Profit is: " + profit);
                  } else {
                    console.log("Loss is: " + (-profit));
                  }

                   let tax = 0;
                   if ( profit > 50000) {
                    tax = profit * 0.2;
                   } else {
                    tax = profit * 0.1;
                   }
                   console.log("Tax is: " + tax);

                    let netProfit = profit - tax;
                    console.log("Net profit is: " + netProfit);

                   let netProfitPercentage = (netProfit / income) * 100;
                   console.log("Net profit percentage is: " + netProfitPercentage.toFixed(2) + "%");

                   let  netProfitPercentage2 = (netProfit / expense) * 100;
                   console.log("Net profit percentage with respect to expense is: " + netProfitPercentage2.toFixed(2) + "%");
                   
                   if (netProfitPercentage > 20) {
                    console.log("The company is doing well");
                   } else if (netProfitPercentage > 10) {
                    console.log("The company is doing okay");
                   } else {
                    console.log("The company is not doing well");
                
                   }
                        let averagesalary = expense/salary.length;
                        console.log("Average salary is: " + averagesalary);

                        if (averagesalary > 50000) {
                            console.log("The average salary is high");
                        } else if (averagesalary > 20000) {
                            console.log("The average salary is moderate");
                        } else {
                            console.log("The average salary is low");
                        }
                    }       
                } let employee1 = new employee();



                class star{
                     constructor() {

                        let i=5; 

                        for (let j= 1; j<=i; j++)
                        {
                            console.log("*" .repeat(j));
                        }
                     }  
                } let star1 = new star();


               

class Star2 {

    constructor() {

        for (let i = 9; i >= 1; i--) {

            if (i % 2 == 0) {   
                continue;
            }

            let pattern = " ";

            for (let j = 1; j <= i ; j++) {

                pattern = pattern + "  * ";

                
            }

            console.log(pattern);
        }
    }
}

let star2_1 = new Star2();




                