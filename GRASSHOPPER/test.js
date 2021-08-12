//Utilizando replace().
//Example 01
var message = 'Today we are going shopping';

message = message.replace('day', 'morrow');

console.log(message);

//Example 02
var greeting = 'Hello Grasshopper!';
greeting = greeting.replace('hopper', 'jumper');
console.log(greeting);

var x = 5;
if (x>10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}
console.log(x);

//Cambista
function inYen(dollars){
    let amount = dollars * 113;
    return amount;
};

console.log('20 US dollars is: ' + inYen(20) + ' Japanese yen');
console.log('100 US dollars is: ' + inYen(100) + ' Japanese yes');