const getConvert = (text, key, encode) => {
  let alphabet = Array.from(
    new Set((key + "abcdefghijklmnopqrstuvwxyz").split("").map(e => e))
  ).map(e => e);

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
        let encodedLetter;
        let index;

        if (alphabet.indexOf(letter) + i + 1 > alphabet.length && encode) {
          index = i - (alphabet.length - alphabet.indexOf(letter));
        } else if (alphabet.indexOf(letter) - i < 0 && !encode) {
          index = alphabet.length + alphabet.indexOf(letter) - i;
        } else {
          index = alphabet.indexOf(letter) + (encode ? +i : -i);
        }
        ++i;
        return flagUpper ? alphabet[index].toUpperCase() : alphabet[index];
      } else {
        i = 1;
        return letter;
      }
    })
    .join("");
};

function encode(text, key) {
  return getConvert(text, key, true);
}

function decode(text, key) {
  return getConvert(text, key, false);
}

console.log(encode("This is an example.", "cipheeeere"));

// Urew pu bq rzfsbtj.
