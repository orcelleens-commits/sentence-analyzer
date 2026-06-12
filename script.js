function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

function getConsonantCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (char >= "a" && char <= "z" && !vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) count++;
  }

  return count;
}

function getWordCount(sentence) {
  if (sentence.trim() === "") return 0;
  return sentence.trim().split(/\s+/).length;
}

// UI function
function analyzeText() {
  const text = document.getElementById("inputText").value;

  document.getElementById("vowels").innerText = getVowelCount(text);
  document.getElementById("consonants").innerText = getConsonantCount(text);
  document.getElementById("punctuation").innerText = getPunctuationCount(text);
  document.getElementById("words").innerText = getWordCount(text);
}
