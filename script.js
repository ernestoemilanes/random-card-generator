window.onload = () => {
    let suit = generateRandomSuit();
    if (suit == '&#9830;' || suit == '&#9829;') {
        document.querySelector(".top-suit").style.color = "red";
        document.querySelector(".bottom-suit").style.color = "red";
        document.querySelector(".number").style.color = "red";
        // document.getElementbyClassName(‘suit - display’).forEach((element) => { //asign style.color = “red” to the element at this level }
        console.log(document.getElementsByClassName("suit-display"));
    }
    document.querySelector('.number').innerHTML = generateRandomNumber();
    document.querySelector('.top-suit').innerHTML = suit;
    document.querySelector('.bottom-suit').innerHTML = suit;
};


//! Changing Numbers in Card
let generateRandomNumber = () => {
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
};


//! Changing Logo(suit) in Card
function generateRandomSuit() {

    let heart = '&#9829;'
    let diamond = '&#9830;'
    let spades = '&#9824;'
    let clubs = '&#9827;'

    let suit = [diamond, spades, heart, clubs];

    let indexSuit = suit[Math.floor(Math.random() * suit.length)];





    console.log(indexSuit);
    console.log(diamond);
    return indexSuit;
};