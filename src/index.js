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

function decode(expr) {
    let result = '';
    for (let i = 0; i < (expr.length / 10); i++) {
        let segment = expr.substring(10 * i, 10 * (i + 1));
        let code = '';
        if (segment === '**********') {
            result = result + ' ';
        } else {
            for (let k = 0; k < 5; k++) {
                switch (segment.substring(k * 2, 2 * (k + 1))) {
                    case '11':
                        code = code + '-';
                        break;
                    case '10':
                        code = code + '.';
                        break;
                    case '00':
                        break;
                }
            }
            console.log(code);
            result = result + MORSE_TABLE[code];
        }
    }
    return result;
}

module.exports = {
    decode
}