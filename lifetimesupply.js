function calculateSupply (age, amtPerDay){

var MaxAge=100;

return ((MaxAge-age)*365)*amtPerDay;}

console.log ("You will need " + (calculateSupply(30, 5)) + " to last you until the ripe old age of 100.");