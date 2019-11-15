// Loop

// ** While Loop
/*
	while(condition){
	>> incriment or decriment [where to want]
	-------loop block;

	>> incriment or decriment [where to want]
	}
*/

// example

/*
var i = 0;

while(i<=10){
	console.log(i);
	i++
}

var n = 0;

while(true){
	console.log(n);
	n++
	if(n == 10){
		break;
	}
}

console.log("reset");
*/
// ** do while Loop
/*
	do {
	//code;
	} while(condition)
*/

// example
/*
var x = 0;

do{
	console.log(x);
	x++
} while(x < 10);
*/
// ** for Loop
/*
	for(initail; condition; stepping) {
		code;
	}
*/

// example
/*
for(i=0; i<10; i++){
	console.log(i);
}
*/
// Task
// print odd num 0-10

for(var i = 0; i <=17; i++){
	if(i % 2==1){
		console.log(i);
	}
}
