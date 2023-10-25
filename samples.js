// Task 1: Push numbers into an array and calculate their sum
const numbers = [5, 10, 15, 20, 25];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(`Sum of array values: ${sum}`);

// Task 2: Input a country code and use a switch statement to display the country
const countryCode = 'RO';
let countryName;

switch (countryCode) {
  case "US":
    countryName = "United States";
    break;
  case "CA":
    countryName = "Canada";
    break;
  case "UK":
    countryName = "United Kingdom";
    break;
  default:
    countryName = "Unknown Country";
    break;
}

console.log(`The country with code ${countryCode} is ${countryName}`);

// Task 3: Calculate the final price of an array of book objects
const books = [
  { name: "Book A", year: 2020, price: 20 },
  { name: "Book B", year: 2018, price: 15 },
  { name: "Book C", year: 2022, price: 25 },
];

let finalPrice = 0;
for (let i = 0; i < books.length; i++) {
  finalPrice += books[i].price;
}
console.log(`Final price of all books: $${finalPrice}`);
