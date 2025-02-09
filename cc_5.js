// Task 1 - Object Properties
const customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};

console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

// Task 2 - Object Methods
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};

order.displayOrder();

// Task 3 - Array Manipulation
order.displayOrder();

const cartItems = ["Apple", "Banana", "Orange"];
cartItems.push("Grapes");
cartItems.pop();
cartItems.unshift("Mango");
cartItems.shift();
console.log("Final cart items:", cartItems);

// Task 4 - Map Method
const prices = [100, 200, 300];
const discountedPrices = prices.map(price => price * 0.9);
console.log("Discounted prices:", discountedPrices);

// Task 5 - Filter Method
const inventory = [5, 0, 12, 8, 0];
const availableProducts = inventory.filter(quantity => quantity > 0);
console.log("Available products:", availableProducts);

// Task 6 - Reduce Method
const sales = [500, 300, 200, 400];
const totalRevenue = sales.reduce((acc, sale) => acc + sale, 0);
console.log("Total revenue:", totalRevenue);

// Task 7 - Find() Method
const customers = ["Alice", "Bob", "Charlie", "David"];
const foundCustomer = customers.find(customer => customer === "Charlie");
console.log("Found customer:", foundCustomer);

// Task 8 - Function Declaration

function calculateTax(amount, taxRate) {
    const tax = amount * taxRate;
    console.log(`Calculated tax: $${tax}`);
    return tax;
}

calculateTax(1000, 0.07);

// Task 9 - Function Expression
const applyDiscount = function(price, discount) {
    const discountedPrice = price - (price * discount);
    console.log(`Discounted price: $${discountedPrice}`);
    return discountedPrice;
};

applyDiscount(200, 0.1);

// Task 10 - arrow function

const calculatePoints = purchaseAmount => {
    const points = Math.floor(purchaseAmount / 10);
    console.log(`Loyalty points earned: ${points}`);
    return points;
};

calculatePoints(250);
