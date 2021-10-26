

function rot13(str){

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newStr = ' ';

    for( let i = 0; i < str.length; i++) {

        let index = alphabet.indexOf(str[i]);

        if( index == -1 ){
            newStr += str[i];
        } else {
            let newIndex = (index + 13) % 26 ;
            newStr += alphabet[newIndex]; 
        }

    }
    return newStr;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));