const generateUUID = require("generate-uuid.js");

function createDeck() {
  const NAMES = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const SUITS = ["C", "S", "D", "H"];
  const cards = [];

  SUITS.forEach((suit) => {
    NAMES.forEach((name) => {
      cards.push(name + suit);
    });
  });

  return cards;
}

module.exports = class Deck {
  constructor() {
    this.cards = createDeck();

    this.id = generateUUID();
  }

  shuffle() {
    let oldCards = this.cards;
    let newCards = [];

    for (let i = 0; i < oldCards.length; i++) {
      const card = oldCards[Math.floor(Math.random() * oldCards.length)];

      newCards.push(card);
    }

    this.cards = newCards;

    return this;
  }

  draw() {
    const card = this.cards[0];

    this.cards.splice(0, 1);

    return card;
  }
};
