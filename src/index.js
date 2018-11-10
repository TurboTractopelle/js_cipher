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

const getConvert = (key, alphabet, text, encode) => {
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
        console.log(alphabet.length, alphabet.indexOf(letter), i);
        if (alphabet.indexOf(letter) + i + 1 > alphabet.length && encode) {
          console.log(
            "plus",
            alphabet[i - (alphabet.length - alphabet.indexOf(letter))]
          );
          encodedLetter =
            alphabet[i - (alphabet.length - alphabet.indexOf(letter))];
        } else if (alphabet.indexOf(letter) - i < 0 && !encode) {
          console.log(
            alphabet.length + alphabet.indexOf(letter) - i,
            alphabet[alphabet.length + alphabet.indexOf(letter) - i],
            "moins"
          );
          encodedLetter =
            alphabet[alphabet.length + alphabet.indexOf(letter) - i];
        } else {
          console.log(
            alphabet[alphabet.indexOf(letter) + (encode ? +i : -i)],
            "defaut",
            alphabet.indexOf(letter) + (encode ? +i : -i)
          );
          encodedLetter =
            alphabet[alphabet.indexOf(letter) + (encode ? +i : -i)];
        }
        //console.log(alphabet[alphabet.length-3])
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
  console.log(alphabet);
  return getConvert(keyReduced, alphabet, text, true);
}

function decode(text, key) {
  let keyReduced = getKey(key);
  let alphabet = getAlphabet(keyReduced);
  console.log(alphabet);
  return getConvert(keyReduced, alphabet, text, false);
}

console.log(decode(encode("This is an example", "secrtky"), "secrtky"));

//console.log(decode("Kjmq jv bp cxcovpq.", "secretkey"));

// Urew pu bq rzfsbtj.
