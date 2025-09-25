// //CREATING MY FIRST ARRAYS

// //  creating arrays with square brackets []
// let fruits = ["apple", "banana", "orange", "grape"];
// let numbers = [10, 25, 30, 45, 50];
// let booleans = [true, false, true, true];
// let mixedArray = ["Precious", 25, true, "student"];

// // Empty array
// let emptyArray = [];

// // Display the arrays
// console.log("Fruits array:", fruits);
// console.log("Numbers array:", numbers);
// // console.log("Booleans array:", booleans);
// console.log("Mixed array:", mixedArray);
// console.log("Empty array:", emptyArray);

// console.log(""); // Empty Line

// // Array length property
// console.log("Number of fruits:", fruits.length);
// console.log("Number of numbers:", numbers.length);
// // console.log("Length of mixed array:", mixedArray.length);
// console.log("Empty array length:", emptyArray.length);

// console.log(""); // Empty Line

// // Accessing individual elements with index [0, 1, 2, ...]
// console.log("First fruit:", fruits[0]);     //apple
// console.log("Second fruits:", fruits[1]);   //banana
// console.log("Last fruit:", fruits[fruits.length - 1]);  //grape

// console.log("First number:", numbers[0]); //10
// console.log("Third number:", numbers[2]); //30

// // What happens with invalid index?
// console.log("Index that dosen't exist:", fruits[10]);  //undefined

// // MODIFYING ARRAYS
// let colors = ["red", "green", "blue"];
// console.log("Original colors:", colors);

// // Changing existing elements
// colors[0] = "purple";
// colors[2] = "yellow";
// console.log("After changes:", colors);

// console.log(""); // Empty Line

// Adding elements to the end with push()
let shoppingList = ["milk", "bread"];
console.log("Original list:", shoppingList);

shoppingList.push("eggs");
shoppingList.push("cheese", "butter"); // Can add multiple items
console.log("After adding items:", shoppingList);

console.log(""); // Empty Line

// Adding elements to the beginning with unshift()
shoppingList.unshift("apple");
console.log("Final list:", shoppingList);

// Removing the first element with shift()
let firstItem = shoppingList.shift();
console.log("Removed first item:", firstItem);
console.log("Final list:", shoppingList);

// console.log(""); // Empty Line

// // Finding elements
// let students = ["Alice", "Bob", "Charlie", "Diana"];
// console.log("Students:", students);
// console.log("Is Bob in class?", students.includes("Bob"));       // true
// console.log("Where is Charlie?", students.indexOf("Charlie"));  // 2
// console.log("Where is Frank?", students.indexOf("Frank"));     // -1 means not found



// // MORE ARRAY METHODS
// let numbers = [1, 2, 3, 4, 5];
// let names = ["John", "Jane", "Bob", "Alice"];

// console.log("Original numbers:", numbers);
// console.log("Original name:", names);

// console.log(""); // Empty line

// // Slice() - Get a portion of the array (dosen't change original)
// let firstThree = numbers.slice(0, 3);  // Grt items 0, 1, 2
// let lastTwo = numbers.slice(-2);      // Get last 2 items
// console.log("First three numbers:", firstThree);
// console.log("Last two numbers;", lastTwo);
// console.log("Original unchanged:", numbers);

// console.log(""); // Empty line

// // splice() - Remove/add items at specific position (changes original)
// let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
// console.log("Original fruits:", fruits);

// // Remove 2 items starting at index 1
// let removed = fruits.splice(1, 2);
// console.log("Removed items:", removed);
// console.log("After removal:", fruits);

// // Add items at index 1
// fruits.splice(1, 0, "mango", "pineapple"); // Remove 0, add 2 items
// console.log("After adding:", fruits);

// console.log(""); // Empty line

// // join() - Convert array to string
// let words = ["Hello", "from", "JavaScript"];
// let sentence = words.join(" ");        // Join with spaces
// let csv = words.join(",");             // Join with commas
// console.log("Words array:", words);
// console.log("As sentence:", sentence);
// console.log("As CSV:", csv);

// console.log(""); // Empty line

// // split() - Convert string to array (string method, but creates arrays)
// let message = "apple,banana,orange";
// let fruitArray = message.split(",");
// console.log("String:", message);
// console.log("Split into array:", fruitArray);

// // reverse() - Reverse array order (changes original)
// let countdown = [1, 2, 3, 4, 5];
// console.log("Original countdown:", countdown);
// countdown.reverse();
// console.log("Reversed countdown:", countdown);





// // INTRODUCTION TO LOOPS MARKDOWN
// // MY FIRST FOR LOOP
// // Basic for loop structure:
// // for (initialization; condition; increment) {code to repeat}
// // Simple counting loop
// console.log("Counting from 1 to 5:");
// for (let i = 1; i <= 5; i++) {
//     console.log("Count:", i);
// }

// console.log(""); // Empty line

// // Counting backwards
// console.log("Countdown from 5 to 1:");
// for (let i = 5; i >= 1; i--) {
//     console.log("Countdown:", i);
// }
// console.log("Blast off!");

// console.log(""); // Empty line

// // Using loops with calculations
// console.log("Multiplication table for 3:");
// for (let i = 1; i <= 10; i++) {
//     let result = 3 * i;
//     console.log(`3 × ${i} = ${result}`);
// }

// console.log(""); // Empty line

// // Loop with different step sizes
// console.log("Even numbers from 2 to 10:");
// for (let i = 2; i <= 10; i += 2) {  // i += 2 means i = i + 2
//     console.log("Even number:", i);
// }

// console.log(""); // Empty line

// // Loop through an array using index
// let colors = ["red", "green", "blue", "yellow"];
// console.log("Colors in the array:");
// for (let i = 0; i < colors.length; i++) {
//     console.log(`Color ${i + 1}: ${colors[i]}`);
// }

 