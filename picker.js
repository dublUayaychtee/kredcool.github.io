const wordSets = [
  ["Ancestral ", "Hot Dog ", "Minotaur"],
  ["Eldrazi ", "Guacamole ", "Tightrope"],
  ["Misunderstood ", "Trapeze ", "Elf"],
  ["Narrow-Minded ", "Baloney ", "Fireworks"],
  ["Phyrexian ", "Midway ", "Bamaboozle"],
  ["Playable ", "Delusionary ", "Hydra"],
  ["Trained ", "Blessed ", "Mind"],
  ["Unassuming ", "Gelationous ", "Serpent"],
  ["Unglued ", "pea-brained ", "dinosaur"],
  ["unsanctioned ", "ancient ", "juggler"],
];

function countVowels(s) {
  const vowelRegex = /([aeiouy])(?!.*\1)/gi;
  const matches = s.match(vowelRegex);
  return matches ? matches.length : 0;
}

function checkSet() {
  // set up temp sets
  let tempSet = [...wordSets]; //create a shallow ref meaning no overwrite
  // add 3 sets randomly to chosen
  let chosen = Array.from({length:3}, () => tempSet.splice(Math.floor(Math.random() * tempSet.length), 1)[0])
                    .sort((a,b) => Math.max(...b.map(s => countVowels(s))) - Math.max(...a.map(s => countVowels(s))));
  let maxWord = chosen[0].toSorted((a,b) => countVowels(b)-countVowels(a))[0];
  let maxCount = countVowels(maxWord);
  //document.getElementById("words").textContent = "Chosen stickers: " + chosen.map(x => x.join(' ')).join(', ');
  //document.getElementById("result").textContent = "Word with most vowels: " + maxWord + ' (' + countVowels(maxWord) + ')';

  // display stickers chosen and biggest
  const results = document.getElementById("results");
  results.innerHTML = '';
  chosen.forEach(set => {
    let card = document.createElement('div');
    card.classList.add("card");
    set.forEach(part => {
      let word = document.createElement('div');
      let number = document.createElement('div');
      number.classList.add("number");
      if (countVowels(part) == maxCount) word.classList.add("max");
      number.textContent = countVowels(part);
      word.appendChild(number);
      let text = document.createElement('div');
      text.classList.add("text");
      Array.from(part).forEach(letter => {
        let char = document.createElement('span');
        char.textContent = letter;
        if (countVowels(letter)) char.classList.add(letter.toLowerCase());
        text.appendChild(char);
      });
      word.appendChild(text);
      card.appendChild(word);
    });
    results.appendChild(card);
  })
}
