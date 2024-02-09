

var arr = new Array ();

arr[0] = "Candy Land";
arr[1] = "Sorry";
arr[2] = "Uno";
arr[3] = "Battleship";

console.log(arr);

function turns(number) {
    console.log("How many turns have there been? " + number);
}

const find_number_of_turns = function(number) {
    console.log("You have " + number + " turns left.");
}

function test_score(functionExpression, number){
    if(number%2 == 0){
        functionExpression(number);
    }
    else{
        console.log("This number is not even.");
    }
}

function fuel(price, amount) {
    console.log("Total amount is " + (price * amount));
}

const price = 1.00;
const amount = 20.00;

fuel(price, amount);

for (let turns in arr) {
    test_score(find_number_of_turns, turns);
}

