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

// Task 3: Employee Records //
let employee = {
    name: "Employee Name",
    age: 100,
    department: "No Department",
    isActive: true
};
employee.department = "USF Department"; // updated the deparment property to "USF Department"
employee.position = "Worker"; // added employee position to the object

console.log(employee); // log the object with updated properties

// Task 4: Customer Database //
let customers = [
    {name: "Bye Felicia", email: "felicia.bye@gmail.com", purchaseAmount: 100},
    {name: "Ooo Sharquisha", email: "sharquisha.ooo@gmail.com", purchaseAmount: 500},
    {name: "No Name", email: "name.no@gmail.com", purchaseAmount: 200},
]; // created an array with three different objects
customers.push({name: "New Name", email: "name.new@gmail.com", purchaseAmount: 300}); // added a new object to the array

console.log(customers); // logged the array and the newly added object

// Task 5: Order Processing System //
let order = {
    orderID: 123,
    customerName: "Regina George",
    amount: 1000,

    calculateTax: function(){
        return this.amount * .10;
    }
};

console.log(order); // logging the order details
console.log(order.calculateTax); // logging the calculated tax