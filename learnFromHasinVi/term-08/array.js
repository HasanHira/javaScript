// About array
/*
var foods = ["rice", "bread", "noodles", "biscuits", "cake"];

console.log(foods,'\n');

console.log(foods[3]); // array starts with 0 index or offset;

console.log(foods[5]);

foods[5] = "burger"; // for inseart an item in array.

console.log(foods[5]);

console.log(foods.length); // to know how many items in the array.
*/

/*
// 1. to know last items;
var foods = ["rice", "bread", "noodles", "biscuits", "cake", "burger"];


var lastItem = foods.length - 1;

console.log(foods[lastItem]);

// 2. to add an item;

var addItem = foods.length;

foods[addItem] = "dounut";

var lastItem = foods.length - 1;
console.log(foods[lastItem]);
console.log(foods);
*/

// 1. Add and remove item;

// ADD { push() to back; unshift() to first }
var foods = ["rice", "bread", "noodles", "biscuits"];
console.log(foods);

foods.push("patise"); // to add item in last offset

console.log(foods);

foods.unshift("danis"); // to add item in first offset

console.log(foods);

// REMOVE { pop() to back; shift() to first }

var khabar = ["vat", "ruti", "khichuri", "polaw", "jau"];

console.log(khabar);

khabar.pop(); // to remove an item from last; and it's also return the remove item;

var lastKhabar = khabar.pop();
console.log(khabar);

console.log(lastKhabar);

console.log(khabar.length);
var firstItem = khabar.shift(); // to remove an item from first; and it's also return the remove item;
console.log(khabar);

console.log(firstItem);
console.log(khabar.length);




















