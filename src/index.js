const getKey = key =>
  key.split("").reduce((acc, letter) => {
    if (acc.split("")[acc.length - 1] !== letter) {
      return (acc = acc + letter);
    } else {
      return acc;
    }
  });

const getAlphabet = key => {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  key.split("").map(letter => alphabet.splice(alphabet.indexOf(letter), 1));
  return (key + alphabet.join("")).split("");
};

const getConvert = (key, alphabet, text) => {
  let i = 1;
  return text
    .split("")
    .map(letter => {
      let flagUpper = false;
      if (letter !== letter.toLowerCase()) {
        letter = letter.toLowerCase();
        flagUpper = true;
      }
      if (alphabet.indexOf(letter) !== -1) {
        let encodedLetter = alphabet[alphabet.indexOf(letter) + i];
        ++i;
        return flagUpper ? encodedLetter.toUpperCase() : encodedLetter;
      } else {
        i = 1;
        return letter;
      }
    })
    .join("");
};

function encode(text, key) {
  let keyReduced = getKey(key);
  let alphabet = getAlphabet(keyReduced);
  return getConvert(keyReduced, alphabet, text);
}

function decode(text, key) {
  let keyReduced = getKey(key);
  let alphabet = getAlphabet(keyReduced);
  return getConvert(keyReduced, alphabet, text);
}

console.log(encode("This is an exemple.", "cccciiiiippphheeeeerrrrr"));
// Urew pu bq rzfsbtj.

// Urew pu bq rzfsbtj
