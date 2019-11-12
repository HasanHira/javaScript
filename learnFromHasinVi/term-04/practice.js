// Compare three numbers which one is big 420, 654, 18;

var arrValue = [420, 654, 18];

if (arrValue[0]>arrValue[1] && arrValue[0]>arrValue[2]){
	console.log(arrValue[0]);
	console.log(arrValue[0] + " is greater than all value.");
} else if(arrValue[1]>arrValue[0] && arrValue[1]>arrValue[2]){
	console.log(arrValue[1]);
	console.log(arrValue[1] + " is greater than all value.");
} else if(arrValue[2]>arrValue[0] && arrValue[2]>arrValue[1]){
	console.log(arrValue[2]);
	console.log(arrValue[2] + " is greater than all value.");
}