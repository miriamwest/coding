// var superHeroes = [
// ["Batman", "Bruce Wayne"],
// ["Spiderman", "Peter Parker"],
// ["The Flash", "Barry Allen"]
// ];

// var secretIdentity = superHeroes.map (function(revealArray){
// 	return revealArray.join(" is ");
// });
// console.log(secretIdentity.join("\n"));


var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

players.find(function (name){
	return name.firstName ==='Mike';
});

var positiones =players.filter (function(player){
	return player.position ==='RB';});

players.map (function(nombres){
	return nombres.lastName;});

var rbFive = positiones.filter(function(player){
	return player.touchdowns>5;
})

var touchdown = positiones.reduce(function(sum, player)
	{return sum + player.touchdowns;}, 0);
//touchdown=23