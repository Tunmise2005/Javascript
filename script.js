// This is your very first JavaScript code!
console.log("Hello, World!");


// Creating variables with let (values can change)
let studentName = "Alice";
let studentAge = 20;

// Creating variables with const (values cannot change)
const schoolName = "JavaScript Academy";
const currentYear = 2024;

// Display the variables
console.log(studentName);
console.log(studentAge);
console.log(schoolName);
console.log(currentYear);



// Strings - text data enclosed in quotes
let message1 = "Hello World";           // Double quotes
let message2 = 'JavaScript is fun';     // Single quotes
let message3 = `Learning to code`;      // Backticks (template literals)

// Strings can contain numbers, but they're treated as text
let zipCode = "12345";
let phoneNumber = "555-1234";

// Display the strings
console.log(message1);
console.log(message2);
console.log(message3);
console.log("Zip Code:", zipCode);
console.log("Phone:", phoneNumber);

// Check the type
console.log("Type of message1:", typeof message1);
console.log("Type of zipCode:", typeof zipCode);



// Numbers - numeric values (no quotes needed)
let age = 25;
let price = 19.99;
let temperature = -5;
let distance = 1000;
let pi = 3.14159;

// Very large or small numbers
let bigNumber = 1000000;
let scientificNotation = 2.5e6;  // Same as 2,500,000

// Display the numbers
console.log("Age:", age);
console.log("Price:", price);
console.log("Temperature:", temperature);
console.log("Distance:", distance);
console.log("Pi:", pi);
console.log("Big Number:", bigNumber);
console.log("Scientific:", scientificNotation);

// Check the types
console.log("Type of age:", typeof age);
console.log("Type of price:", typeof price);




// Booleans - true or false values
let isStudent = true;
let hasLicense = false;
let isOnline = true;
let isComplete = false;

// Display the booleans
console.log("Is Student:", isStudent);
console.log("Has License:", hasLicense);
console.log("Is Online:", isOnline);
console.log("Is Complete:", isComplete);

// Check the types
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of hasLicense:", typeof hasLicense);

// Booleans are often the result of comparisons
let isAdult = age <= 17;
console.log("Is Adult:", isAdult);
console.log("Type of comparison result:", typeof isAdult);




// Undefined - declared but not assigned
let firstName;
let lastName;

console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("Type of firstName:", typeof firstName);

// Null - intentionally empty
let middleName = null;
let nickname = null;

console.log("middleName:", middleName);
console.log("nickname:", nickname);
console.log("Type of middleName:", typeof middleName);  // This shows "object" - a JavaScript quirk!

// Assigning values later
firstName = "Onasanya";
lastName = "Precious";

console.log("After assignment:");
console.log("firstName:", firstName);
console.log("lastName:", lastName);



let a = 10;
let b = 3;

console.log("a =", a, "and b =", b);
console.log(""); // Empty line for spacing

// Basic arithmetic operations
console.log("Addition: a + b =", a + b);
console.log("Subtraction: a - b =", a - b);
console.log("Multiplication: a * b =", a * b);
console.log("Division: a / b =", a / b);
console.log("Remainder: a % b =", a % b);
console.log("Exponentiation: a ** b =", a ** b);

// More examples
console.log(""); // Empty line
console.log("More examples:");
console.log("15 / 4 =", 15 / 4);
console.log("15 % 4 =", 15 % 4);  // What's left over after dividing
console.log("2 ** 8 =", 2 ** 8);  // 2 to the power of 8
