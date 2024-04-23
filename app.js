// Kartların bilgilerini ve görüntülerini içeren bir dizi
const cardArray = [
    { name: 'fries', img: 'images/fries.jpg' },
    { name: 'cheeseburger', img: 'images/cheeseburger.jpg' },
    { name: 'hotdog', img: 'images/hotdog.jpg' },
    { name: 'icecream', img: 'images/icecream.jpg' },
    { name: 'milkshake', img: 'images/milkshake.jpg' },
    { name: 'pizza', img: 'images/pizza.jpg' },
    { name: 'fries', img: 'images/fries.jpg' },
    { name: 'cheeseburger', img: 'images/cheeseburger.jpg' },
    { name: 'hotdog', img: 'images/hotdog.jpg' },
    { name: 'icecream', img: 'images/icecream.jpg' },
    { name: 'milkshake', img: 'images/milkshake.jpg' },
    { name: 'pizza', img: 'images/pizza.jpg' },
];

// Kartları karıştır
cardArray.sort(() => 0.5 - Math.random());

// Oyun tahtasını temsil eden bir element
const gridDisplay = document.querySelector('#grid');

// Skoru gösteren bir element
let score = document.getElementById('score');

// Seçilen kartların adlarını ve kimliklerini saklayan diziler
let cardChosen = [];
let cardChosenID = [];

// Eşleşen kartları saklayan bir dizi
const cardWon = [];

// Oyun tahtasını oluşturan işlev
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard();

// Eşleşmeyi kontrol eden işlev
function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneID = cardChosenID[0];
    const optionTwoID = cardChosenID[1];

    if (cardChosen[0] === cardChosen[1]) {
        cards[optionOneID].setAttribute('src', 'images/white.png');
        cards[optionTwoID].setAttribute('src', 'images/white.png');
        cards[optionOneID].removeEventListener('click', flipCard);
        cards[optionTwoID].removeEventListener('click', flipCard);
        cardWon.push(cardChosen);
    } else {
        cards[optionOneID].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoID].setAttribute('src', 'images/blank.jpg');
    }

    score.textContent = cardWon.length;

    cardChosen = [];
    cardChosenID = [];

    if (cardWon.length == cardArray.length / 2) {
        score.innerHTML = 'Tebrikler Kazandınız!';
    }
}

// Kartı çeviren işlev
function flipCard() {
    const cardID = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardID].name);
    cardChosenID.push(cardID);
    this.setAttribute('src', cardArray[cardID].img);

    if (cardChosen.length == 2) {
        setTimeout(checkMatch, 500);
    }
}
