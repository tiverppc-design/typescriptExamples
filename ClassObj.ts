class Test5
{
    //methds
    M1() : void
    {
        console.log("M1 Hello World");

    }

     M2() : void
    {
        console.log("M2 Hello World");
    }

    M3() : void
    {
        console.log("M3     Hello World");
    }
}

const t1 = new Test5();
t1.M1();
t1.M2();
t1.M3();

class test3
{ 
 name1 : string ="Tiver Sahni";
 name2 : string ="Shradha Khapra"
 age2 : number =36;
 age1 : number =24;

}

const t3 = new test3();
console.log(t3.name1);
console.log(t3.age1);
console.log(t3.name2);
console.log(t3.age2);




class test4
{ 
    exam() : void 
    {
        console.log("Exam is over");
    }

     exam2() : void
    {
        console.log("Passing " + (10 + 20));
    }
       marks(engMarks : number, mathMarks : number) : void
       {
        console.log("Eng Marks: " + engMarks + ", Math Marks: " + mathMarks);
        console.log("Total Marks: " + (engMarks + mathMarks));
       }
    }
       
       const t4 = new test4(); 
       t4.exam();
       t4.exam2();
       t4.marks(10,14);
   
