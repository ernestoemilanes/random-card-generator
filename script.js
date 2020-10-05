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
let generateRandomSuit = () => {
    let suit = ['&#9830;', '&#9824;', '&#9829;', '&#9827;'];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
};