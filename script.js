window.onload = () => {
    document.querySelector('.card').classList.add(generateRandomSuit());
    document.querySelector('.card').innerHTML = generateRandomNumber();
};


//! Changing Numbers in Card
let generateRandomNumber = () => {
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
};
//! Changing Logo(suit) in Card
let generateRandomSuit = () => {
    let suit = ['diamond', 'spade', 'heart', 'club'];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
};