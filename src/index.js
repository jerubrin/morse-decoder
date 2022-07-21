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
};

function decode(expr) {
    let resStr = ""
    let n = 0;
    while (n * 10 < expr.length) {
        let code = expr.substr(n * 10, 10);
        let morz = ''
        if (code == '**********') {
            resStr += ' ';
            n++;
            continue;
        }
        for (let i=0; i < code.length; i += 2){
            switch(code.substr(i, 2)){
                case '10':
                    morz += "."
                break;
                case '11':
                    morz += "-"
                break;
            }
        }
        resStr += MORSE_TABLE[morz];
        n++;
    }
    return resStr;
}

module.exports = {
    decode
}