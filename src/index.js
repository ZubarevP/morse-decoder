const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

// split binary word to binary letters 
const SplitIntoLetters = function (word) {
  let result = new Array();
  while (word.length >= 10) {
    result.push(word.splice(0, 10));
  }
  return result;
}

// remove zero from begin of binaty letter
const RemoveZeroFromBegin = function (word) {
  while (word.length > 0 && Number(word[0]) === 0) {
    word.shift();
  }
}

// change numbers to dot or dash
const MorseFromNumbers = function (word) {
  let result = new Array();
  RemoveZeroFromBegin(word);

  while (word.length > 0) {
    result.push(word.splice(0, 2).join("") === "10" ? "." : "-");
    RemoveZeroFromBegin(word);
  }
  return result.join("");
}

////////////////////////////////////////////////////////////
function decode(line) {
  return line.split("**********")
    .map((word) => SplitIntoLetters(Array.from(word)))                                // split string into words
    .map((splited_word) => splited_word.map(char => MorseFromNumbers(char)))          // split words into characters (morse format)
    .map((splited_word) => splited_word.map(char => MORSE_TABLE[char]))               // get letter from morse code
    .map(chars => chars.join(""))                                                     // join letters to word
    .join(" ");                                                                       // join words to string
}

module.exports = {
  decode
}
