// Array copy
/*
Example:

var list = [ "monir", "jony", "bijoy", "yeamin" ];

var listCopy = list;
listCopy[1] = "selim";

console.log(list,listCopy);

result will show: [ "monir", "selim", "bijoy", "yeamin" ] [ "monir", "selim", "bijoy", "yeamin" ];

						** when change a element by redeclear another one it change both of arrays; because it change both in RAM it called "deep copy". It's not similar as variable, in variable it works perfectly and it called "shalow copy". So, how we can change as variable in Array Copy? It shown bellow method. **
*/

var list = [ "monir", "jony", "bijoy", "yeamin" ];

var listCopy = list.slice(); // it copied all elements without connection or separeted copy; than:

listCopy[1] = "selim";

console.log(list); 			// wow;
console.log(listCopy);		// it's work; Some of other methods: [...list] (it's in es6)
							// and array.from(list); (old way)

// Array join

var menu1 = [ "alam", "kamal", "jamal" ];
var menu2 = [ "shahin", "maruf", "jeem" ];
var menu3 = [ "robin", "yeamin", ];
// join methods are

// 01
// var menu = menu1.concat(menu2).concat(menu3);

// 02 
// var menu = menu1.concat(menu2,menu3);

//03
var menu = [].concat(menu1, menu2, menu3);

console.log(menu);


// array print with for loop

var week = [ "sat", "sun", "mon", "tue", "wed", "thu", "fri" ];

// first method
/*
var days = week.length; // for reduce RAM use every times; its take one time only;

for( x = 0; x < days; x++ ){
	console.log( "Weeks day " + (x +1) + " is " + week[x]);
}
*/


// second method

for( x in week){
	console.log( "Week's days " + x + " index is for " + week[x]);
}

