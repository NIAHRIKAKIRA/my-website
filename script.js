const wishes = [
  "May your birthday be filled with sunshine and smiles! ☀",
  "Wishing you health, happiness, and all that you desire! 🎁",
  "Here’s to another year of adventures and memories! 🌟",
  "Happy Birthday! You deserve all the love in the world. ❤"
];

function changeWish() {
  const wishText = document.getElementById('wish-text');
  const randomIndex = Math.floor(Math.random() * wishes.length);
  wishText.textContent = wishes[randomIndex];
}