// ================================
// TypeScript String Program
// ================================

// 1. String Declaration
let str: string = "Suresh IT Academy";

console.log("Original String:", str);

// --------------------------------

// 2. String Length
console.log("Length of String:", str.length);

// --------------------------------

// 3. Convert to Uppercase
console.log("Uppercase:", str.toUpperCase());

// --------------------------------

// 4. Convert to Lowercase
console.log("Lowercase:", str.toLowerCase());

// --------------------------------

// 5. String Concatenation
let firstName: string = "Suresh";
let lastName: string = "Kumar";

let fullName: string = firstName + " " + lastName;

console.log("Full Name:", fullName);

// --------------------------------

// 6. String Interpolation
let course: string = "TypeScript";

let message: string = `Hello ${firstName}, Welcome to ${course}`;

console.log(message);

// --------------------------------

// 7. Includes Method
console.log("Includes 'IT':", str.includes("IT"));

// --------------------------------

// 8. StartsWith Method
console.log("Starts With 'Sure':", str.startsWith("Sure"));

// --------------------------------

// 9. EndsWith Method
console.log("Ends With 'Academy':", str.endsWith("Academy"));

// --------------------------------

// 10. Replace Method
let replacedStr: string = str.replace("Academy", "Institute");

console.log("After Replace:", replacedStr);

// --------------------------------

// 11. Substring Method
console.log("Substring:", str.substring(0, 6));

// --------------------------------

// 12. Split Method
let words: string[] = str.split(" ");

console.log("Split String:", words);

// --------------------------------

// 13. Trim Method
let extraSpace: string = "   Hello TypeScript   ";

console.log("Before Trim:", extraSpace);
console.log("After Trim:", extraSpace.trim());

// --------------------------------

// 14. Repeat Method
console.log("Repeat:", firstName.repeat(3));