class staticclass {
    //let a = 40;
    static greeting(num: number, num2: number, num3: string): void {
        console.log("Hello from static class");
        console.log(this.greeting2());
        console.log(num + num2);
        console.log(num3);
    }

    static greeting2(): number{
        console.log("Hello from static class2");
        let a = 10 +20;
        return a;
    }

    greeting3(): void{
        console.log("Hello from non-static class");
        let b = 10 +20;
        console.log(b);
    }

    add = (a: number, b: number): number => {
        return a + b;

        
      };
}
      
let add2 = new staticclass(); 
add2.add(10, 20);


//export default staticclass; 




class User {
    // 1. Declare the properties and their types
    name: string;
    age: number;
    isActive: boolean;
    private email: string;
  
    // 2. Create the constructor
    constructor(userName: string, userAge: number) {
      // 3. Initialize the values
      this.name = userName;
      this.age = userAge;
      this.email = "userEmail";
      // You can also initialize default values inside the constructor
      this.isActive = true; 
    }
  }
  let user5 = new User("John", 20);
  user5.name="Tiver";
  //user5.email="tiver@gmail.com";


