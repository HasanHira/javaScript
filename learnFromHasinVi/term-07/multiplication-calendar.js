//multiplication

// var series = "";

// for(var i = 1; i <= 10; i++){

// 	series = i + " = ";

// 	for(var j = 1; j <= 10; j++){

// 		series = series + i * j + " ";
// 	}

// 	console.log(series);
// }



/*
Nested for worked like below:

for (var i = 0; i < 2; i++) {		//-------------------------
	var text = "";					//							|
	for(var x=1; x<=3; x++){		// ----------------			|
		var day = "hello" + x;		//	|			   |	 (times)
									//	^			(times)		|
		text = text + day + " ";	//  |			   |	    |
	}								//   -------------\/		|
	console.log(text);				// |------------------------
}
*/

// Calendar

var year		= "2019"; // Number as string
var month 		= "May";
var totalDays	= 31;
var startsDay	= 6; // Days start 0 index;

console.log("Calendar of",month + ",", year + "\n");

	console.log( "\n"+ month + ",", year);
	console.log("Sat     Sun     Mon     Tue     Wed     Thu     Fri" + "\n");
		for(var i = 0; i < 6; i++){
		var weeks = "";
		for(var d = 1; d <= 7; d++){
			var days = i * 7 + d - startsDay;

			if(days>totalDays){
				break;
			} else if (days<1){
				days = " ";
			}

			if(days > 9){
				weeks = weeks + days + "      ";
			} else {
				weeks = weeks + days + "       ";
			}

		}
		console.log("",weeks);
	}
