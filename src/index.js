function encode(text, key) {
  let keyReduced = key.split("").reduce((acc, letter) => {
    if (acc.split("")[acc.length - 1] !== letter) {
      return (acc = acc + letter);
    } else {
      return acc;
    }
  });

  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  keyReduced
    .split("")
    .map(letter => alphabet.splice(alphabet.indexOf(letter), 1));
  alphabet = (keyReduced + alphabet.join("")).split("");

  let i = 1;

  let out = text
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

  return out;
}

function decode(text, key) {
  return text;
}

console.log(encode("This is an example.", "cccciiiiippphheeeeerrrrr"));
// Urew pu bq rzfsbtj.

// Urew pu bq rzfsbtj
