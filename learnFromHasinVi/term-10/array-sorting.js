
// Array sort filter with for loop
var list = [ "sun", "mon", NaN, "tue", , null, "wed", "", "thu", , "fri", NaN, , "", undefined, "sat"  ];

console.log(list);

var aNewList = [];

for( i in list ){
	if(list[i]){
		aNewList.push(list[i]);
	}
}
console.log(aNewList, '\n\n');

// sorting array with order
var days = [ "sun", "mon", "tue","wed","thu","fri","sat"  ];
var letters = [ "a", "f", "b","h","c","e","d", "g"  ];

days.sort();
letters.sort();
console.log(days);
console.log(letters);

var number = [ 1, 16, 10, 2, 48, 28, 4, 21, 19, 3, 32, 11, 42, 23, 36, 12, 31  ];
number.sort();
console.log(number);

// let's try to solve it.

// to swap values

/*
var a = 3, b = 1;

var c = a;
a = b;
b = c;

console.log(a,b);

//or

[ a,b ] = [ b, a ];
console.log(a,b);


*/

var sortNumber = [ 1, 16, 10, 2, 48, 28, 4, 21, 19, 3, 32, 11, 42, 23, 36, 12, 31  ];

var length = sortNumber.length - 1;

for( var x = 0; x < length; x++ ){
	for( var y = 0; y < length; y++ ){
		if(sortNumber[y] > sortNumber[y+1]){
			[ sortNumber[y], sortNumber[y+1] ] = [ sortNumber[y+1], sortNumber[y] ];
		}
	}
}

console.log(sortNumber); // great job

// String to array

var aStr = "Hello! how are you?";
console.log(aStr);

var list = [];

list = aStr.split(" ");

console.log(list);

// Array to string;

var net = [ "to", "catch", "fish,", "we", "use", "net." ]
console.log(net);

var toSen = net.join(" ");

console.log(toSen);

var rev = toSen.split("").reverse().join("");

console.log(rev);

//function;

function multiply(a,b){
  console.log( a * b );
}
multiply(5,2);

// String to array;
var man = [ "manju", "oli", "tareq", "hridoy", "selim", "" ];