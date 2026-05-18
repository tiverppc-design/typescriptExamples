class Student {

    constructor(){

        let name = "tiver sahni";

        console.log("Student Name: " + name);

let marks = [85, 90, 78, 92, 88];
 marks[3] = 74;
 marks.length = 7;
//console.log("Marks:", marks);
marks .forEach((mark, index) => {
    console.log(mark + " is the mark of subject " + (index + 1));
});

    }
}

let student1 = new Student();



class count{

constructor() {

    let i =0;
    for (i=20; i > 10; i--) {
       if ( i==15)
       {
continue;


       }
    
         console.log(i);
    }
    }
}   let count1 = new count();


export class sum{
    constructor() {
        let arr =[10, 20, 40, 60, 70];
        let sum =0; 
        for (let i=0;  i < arr.length; i++) 

        {
            sum = sum+ arr[i];
        }
        console.log("Sum of array is: " + sum);

        console.log("Length of array is: " + arr.length);

        let avg = sum / arr.length;
        console.log("Average of array is: " + avg);
    }
}   let sum1 = new sum();


export class avg{
    constructor() {
        let arr =[10, 20, 40, 60, 70];
        let sum =0; 
        let count =0;
      
        for (let i of arr) {

            if (i <= 10) {

                console.log( i + " is skipped beacause it is less than or equal to 10 ");
                continue;

                
                console.log(i);
            }

            sum = sum + i;

            count++; 
            
        }
        console.log("Sum of array is: " + sum);

        console.log("Length of array is: " + count);

        let avg = sum / count;
        console.log("Average of array is: " + avg);

        //Nested if statement
            
        if (avg >= 40) {
              if (avg === 40) {
                console.log("Passed by average");
              }
        else {
            console.log("Passeed");
}
        }
else{
console.log("Failed");
}
        
    }
} 


class max{
    constructor()

    {

        let arry = [20, 15, 65.4, 30];
        let max = arry[0];
        for (let i = 1; i < arry.length; i++) {
            if (arry[i] > max) {
                max = arry[i];
            }
        }
        console.log("Maximum value in the array is: " + max);   
    }
}   let max1 = new max();


class min {
    constructor() {

    let arry = [23, 4,56,76,21,-1];   
    let min = arry[0];
         for(let i of arry) {
            
if (i<min) {
    min = i;
   }   
}
console.log("Minimum value in the array is: " + min);
         


         }  
        }
  let min1 = new min();