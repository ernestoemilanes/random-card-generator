window.onload = () => {
    let suit = generateRandomSuit();
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

    let indexSuit = Math.floor(Math.random() * suit.length);


    if (suit[indexSuit] == diamond || suit[indexSuit] == heart) {
        // document.getElementsByClassName("suit-display").style.color = "red";
        console.log(document.getElementsByClassName("suit-display"));
    }


    console.log(indexSuit);
    console.log(diamond);
    return suit[indexSuit];
};