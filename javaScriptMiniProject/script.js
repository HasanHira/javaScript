
var	input_int = document.getElementById('number');
var add_btn = document.getElementById('add');

var save_val = [];

function add_val(){
	var input_val = input_int.value;

	if(input_val!==""){
		save_val.push(input_val);
	}else {
		alert("Input requried");
	}

}

var input=save_val.length;
// var input=save_val[save_val.length];
// console.log(input);
// console.log(save_val[0]);

for(var i=0; i<input; i++){
	console.log(input);
}

add_btn.addEventListener('click', function(){
	add_val();
});

// var woow = [52, 'hi', 'car', 6598, 'hasan'];
// for(var i=0; i<woow.length; i++){
// 	console.log(woow[i]);
// }