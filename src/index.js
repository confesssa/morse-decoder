const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '!': ' ',
};

function decode(expr) {
  let part = '';
  let newString = '';
  let result = '';
  
  for (let i = 0; expr.length > i; expr = expr.slice(10)) {
  part = expr.slice(0, 10);
  
  
  for (let j = 0; part.length > j; part = part.slice(2)) {
  if (part === '**********') {
  newString += '!';
  } else if (part[0] === '0' && part[1] === '0') {
  newString += '';
  } else if (part[0] === '1' && part[1] === '0') {
  newString += '.';
  } else if (part[0] === '1' && part[1] === '1') {
  newString += '-';
  };
  
  };
  result += MORSE_TABLE[newString];
  newString = '';
  };
  return result;
}

module.exports = {
    decode
}