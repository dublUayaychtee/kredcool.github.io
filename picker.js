const wordSets = [
  ["Ancestral", "Hot Dog", "Minotaur"],
  ["Eldrazi", "Guacamole", "Tightrope"],
  ["Misunderstood", "Trapeze", "Elf"],
  ["Narrow-Minded", "Baloney", "Fireworks"],
  ["Phyrexian", "Midway", "Bamaboozle"],
  ["Playable", "Delusionary", "Hydra"],
  ["Trained", "Blessed", "Mind"],
  ["Unassuming", "Gelationous", "Serpent"],
  ["Unglued", "pea-brained", "dinosaur"],
  ["unsanctioned", "ancient", "juggler"],
];
let chosen = [];

function checkSet() {
  // set up temp sets
  let tempSet = [...wordSets]; //create a shallow ref meaning no overwrite

  // add 3 sets randomly to chosen
  for (let i = 0; i < 3; i++) {
    const randIndex = Math.floor(Math.random() * tempSet.length);
    chosen.push(tempSet[randIndex]);
    tempSet.splice(randIndex, 1);
  }

  const vowelRegex = /([aeiouy])(?!.*\1)/gi;
  let maxWord = "";
  let maxCount = -1;

  chosen.forEach((set) => {
    set.forEach((word) => {
      const matches = word.match(vowelRegex);
      const count = matches ? matches.length : 0;
      if (count > maxCount) {
        maxCount = count;
        maxWord = word;
      }
    });
  });

  // set up display for stickers chosen
  let stickers = "";

  chosen.forEach((set) => {
    set.forEach((word) => {
      stickers = stickers + word + " ";
    });
    stickers = stickers + ", ";
  });

  // display stickers chosen and biggest
  document.getElementById("words").textContent = "Chosen stickers: " + stickers;
  document.getElementById("result").textContent =
    "Word with most vowels: " + maxWord + " (" + maxCount + ")";

  // clear chosen
  chosen = [];
}
