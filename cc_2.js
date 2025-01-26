// Task 1: Store Inventory //
let products = ["Toy", "Dress", "Suit", "Shoes", "Jeans"]; // 5 original products
products.push("Chains"); // adding new product
let removed = products.pop(); // removing last item from the array

console.log(products); // logs the updated array after adding new product
console.log(removed); // logs the updated array after removing last product

// Task 2: Student Scores //
let scores = [75, 90, 82, 95, 70]; // an array of 5 students scores
scores[1] = 100; // the second score updated to 100
let total = scores.reduce((sum, scores) => sum + scores, 0); // adding all the scores together
let averageScores = total / scores.length; // dividing the total by the length to find the average score

console.log(scores); // log of updated array of scores
console.log(averageScores); // log of average of all scores
