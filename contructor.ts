/*class student{

        constructor (name : string, rollno : string, marks : number ) {

               console.log("Constructor Executed"); 
        


    

                console.log("Name =", name); 
                console.log("Roll no. =", rollno);
                console.log("Marks = ", marks)


        
              
    }       

   

} let constudent = new student("Tiver", "32", 89); 
let constudent2 = new student("ALex", "31", 86); 
*/

class Student {

    name: string;

    constructor(name: string) {
        console.log(name);
    }

    display() {
        console.log(this.name);
    }
}

const s1 = new Student("Tiver");
s1.display();



class Student2 {

    constructor(
        public name: string,
        public marks: number
    ) {}

    display() {
        console.log(this.name);
        console.log(this.marks);
    }

}

const s2 = new Student2("Tiver", 90);