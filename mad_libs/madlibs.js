var a= prompt("Adjective");
var b= prompt("Noun");
var c= prompt("Adverb");
var d= prompt("Verb");
var e= prompt("Adjective2");
var f= prompt("Noun2");
var g= prompt("Adverb2");
var h= prompt("Verb2");
var i= prompt("Number");
var j= prompt ("Verb3");

var story="Today we went to the " + a + " park and saw a " + b +". "+  "We " + d + c +". "+  
"There were many " + e + f + "s. "+
"They " + g + h +"ed " +" in groups of " + i +". "+  "We promised to " + j +" another day."

document.querySelector('#banana').innerHTML=story;