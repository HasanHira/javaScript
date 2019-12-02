// slice (It's keep the array's data in array)

// var menu = [ "rice", "pulse", "oil", "fish", "vegitable", "drinks" ]; of
var menu = [ 
			"rice",			//0 = -6
			"pulse",		//1 = -5
			"oil",			//2 = -4
			"fish",			//3 = -3
			"vegitable",	//4 = -2
			"drinks",		//5 = -1
			];

var smalls = menu.slice(2,3);

var fromBack = menu.slice(-5, -2); // to take from back (its start with -1)

console.log(menu, smalls);
console.log(menu, fromBack);


// splice (It's cut the data from array)

var friends = [ 
				"anis",		// 0 = -8
				"manik",	// 1 = -7
				"sharif",	// 2 = -6
				"zafor",	// 3 = -5
				"kawser",	// 4 = -4
				"sumon",	// 5 = -3
				"mukter",	// 6 = -2
				"polash",	// 7 = -1
];

console.log(friends);

// var pick = friends.splice(2,3);

var wayOut = friends.splice(-3, 1);

console.log(friends, wayOut);