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
