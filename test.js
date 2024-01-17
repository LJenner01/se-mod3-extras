// main.js

// EXERCISE 1 test
const Product = require('./Product');

const testP = new Product("Example Product", 19.99, "This is a sample description.");

console.log(testP.name); // Output: Example Product
testP.price = 29.99;
console.log(testP.price); // Output: 29.99

// Attempting to access a private field directly will result in an error
// console.log(testP.#name); // Syntax Error


// EXERCISE 2 test
const TV = require('./tv');
const Shirt = require('./shirt');

const myTV = new TV("Super HD TV", 1500, "A 75-inch 4K TV", 75);
const myShirt = new Shirt("Casual Shirt", 29.99, "A comfortable cotton shirt", 'L');

console.log(myTV.screenSize); // Output: 75
console.log(myShirt.size); // Output: L

// EXERCISE 3 test
const Book = require('./book');
const myBook = new Book("1984", "George Orwell", 328);
myBook.displayInfo(); // Output: 1984 by George Orwell, 328 pages

// EXERCISE 4 test
const products = [
    new Product("Coffee Maker", 99.99, "Brews coffee"),
    new Product("Toaster", 49.99, "Toasts bread"),
    new Product("Blender", 29.99, "Blends food")
];

// EXERCISE 5 test
products.sort(Product.Compare);

products.forEach(product => console.log(`${product.name}: $${product.price}`));
// This will print the products sorted by price in ascending order.


// EXERCISE 6 TEST
const myProduct = new Product("Laptop", 999.99, "High-end laptop", 10);
console.log(`Initial stock: ${myProduct.stockCount}`);

try {
    myProduct.addToStock(5);
    console.log(`Stock after addition: ${myProduct.stockCount}`);

    myProduct.removeFromStock(3);
    console.log(`Stock after removal: ${myProduct.stockCount}`);
} catch (e) {
    console.error(e.message);
}

// Example of handling an error
try {
    myProduct.removeFromStock(20); // Attempt to remove more than available
} catch (e) {
    console.error(e.message); // Will output: "Insufficient stock available"
}


// EXERCISE 7 TEST
const Cart = require('./cart');

const laptop = new Product("Laptop", 999.99, "High-end laptop");
const phone = new Product("Smartphone", 599.99, "Latest model smartphone");

const cart = new Cart();
cart.addItem(laptop, 1);
cart.addItem(phone, 2);

cart.displayCart();

// Update quantity
cart.updateQuantity(phone, 1);
cart.displayCart();

// Remove item
cart.removeItem(laptop);
cart.displayCart();

// Add a bunch of items to sort....
cart.addItem(new Product("Xbox", 399.99, "High-end gaming"), 1);
cart.addItem(new Product("Blender", 99.99, "Nutribullet"), 2);
cart.addItem(new Product("Headphones", 199.99, "Noise-cancelling headphones"), 1);
cart.displayCart();

// Sort the cart items
cart.sort();

console.log("\nCart after sorting:");
cart.displayCart();


// test.js
// EXERCISE Sub step 8.5 test
const myCart = new Cart();
const tv = new TV("Super HD TV", 1500, "75-inch 4K TV", 75);
const shirt = new Shirt("Casual Shirt", 50, "Cotton shirt", 'L');

tv.isOnSale = true;
shirt.isOnSale = true;

myCart.addItem(tv, 2);
myCart.addItem(shirt, 3);

// Output should be: "Total cost: $520"
console.log(`Total cost: $${myCart.calculateTotal()}`);

// Apply discount code
try {
    myCart.applyDiscountCode("Hot32");
} catch (error) {
    console.error(error.message);
}

// Output should be: "Discounted Total cost: $468"
console.log(`Discounted Total cost: $${myCart.calculateTotal()}`);


