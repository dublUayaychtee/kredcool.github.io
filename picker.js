// Define static sets of 3 words each
const wordSets = [
  ["computer", "education", "beautiful"],
  ["strength", "umbrella", "mountain"],
  ["javascript", "ocean", "extraordinary"]
];

function checkSet(index) {
  const chosen = wordSets[index];
  document.getElementById("words").textContent = "Chosen words: " + chosen.join(", ");

  const vowelRegex = /[aeiou]/gi;
  let maxWord = "";
  let maxCount = -1;

  chosen.forEach(word => {
    const matches = word.match(vowelRegex);
    const count = matches ? matches.length : 0;
    if (count > maxCount) {
      maxCount = count;
      maxWord = word;
    }
  });

  document.getElementById("result").textContent =
    "Word with most vowels: " + maxWord + " (" + maxCount + ")";
}