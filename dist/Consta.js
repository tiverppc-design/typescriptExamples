/*let birth = 45;

if (birth > 18 )
{
    console.log( "can be vote" );

}

else
{
    console.log( "can not be vote" );
}


let mode = "green"
let color

  if
    
    (mode === "dark")

    { color = "black";

    }

  
  else

    {

        color= "white"
    }

    console.log(color);



    let number =40;
    if (number % 2 == 0)

    {
        console.log("even");
    }
    else
    {
        console.log("odd");
    }*/
import { faker } from "@faker-js/faker/locale/zu_ZA";
//Else if example 
let marks = 0;
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else if (marks >= 60) {
    console.log("Grade D");
}
else if (marks >= 50) {
    console.log("Grade E");
}
else {
    console.log("Grade F");
}
//Since non-empty strings are always TRUE, this condition becomes always TRUE.
let marks1 = 85;
if (marks1 <= 10 || "grace")
    console.log("Passed with grace");
else {
    console.log("Failed");
}
// check divisible by 5 
let num = 5;
if (num % 5 === 0) {
    console.log(num + " is divisible by 5");
}
else {
    console.log(num + " is not divisible by 5");
}
//Login Validation
let username = "admin";
let password = "password123";
let isLoggedIn = true;
let email = "admin@gmail.com";
if (username === "admin" && password === "password123" && email === "admin@gmail.com") {
    isLoggedIn = true;
    console.log("Login successful");
}
else {
    isLoggedIn = false;
    console.log("Login failed");
}
console.log("Is user logged in? " + isLoggedIn);
// Validate email address
/*let email1 = "tiver.sahni@forwardai.com";

if (email1.includes("@") && email1.includes(".") && email1 ==="tiver.sahni@forwardai.com" && email1.length > 5 && email1.indexOf("@") >= 3 && email1.lastIndexOf(".") < email1.length - 3)
{
    console.log("Email is valid");
    
}
else
{
    console.log("Email is invalid");
    
}

console.log("Email validation result: " + (email1.includes("@") && email1.includes(".") && email1 ==="tiver.sahni@forwardai.com" && email1.length > 5 && email1.indexOf("@") >= 3 && email1.lastIndexOf(".") < email1.length - 3));

console.log(email1.length);*/
let email1 = faker.internet.email();
let isValid = email1.includes("@") &&
    email1.includes(".") &&
    email1.length > 5 &&
    email1.indexOf("@") >= 3 &&
    email1.lastIndexOf(".") < email1.length - 3 &&
    (email1.endsWith(".com") || email1.endsWith(".co") || email1.endsWith(".org"));
if (isValid) {
    console.log("Email is valid");
}
else {
    console.log("Email is invalid");
}
console.log("Email validation result: " + isValid);
console.log("Generated email: " + email1);
console.log(email1);
//Find Largest Number
let a = faker.number.int({ min: 1, max: 100 });
let b = faker.number.int({ min: 1, max: 100 });
let c = faker.number.int({ min: 1, max: 100 });
console.log("Generated numbers: " + a + ", " + b + ", " + c);
if (a >= b && a >= c) {
    console.log(a + "  a is the largest number");
}
else if (b >= a && b >= c) {
    console.log(b + " b is the largest number");
}
else {
    console.log(c + " c is the largest number");
}
