class encryption {

    // this method encodes a string
    encode(string) {
        let passPhrase = 5
        let encodedString = ""

        for (let i = 0; i < string.length; ++i) {
            let ASCIIValue = string[i].charCodeAt(0);

            if (ASCIIValue >= 97 && ASCIIValue <= 122) {
                let encodedASCII = ((ASCIIValue - 97 + passPhrase) % 26) + 97;
                encodedString += String.fromCharCode(encodedASCII);
            } else {
                encodedString += string[i];
            }
        }
        return encodedString;
    }

    // this method decodes a string
    decode(codedString) {
        let passPhrase = 5
        let decodedString = ""

        for (let i = 0; i < codedString.length; ++i) {
            let ASCIIValue = codedString[i].charCodeAt(0);

            if (ASCIIValue >= 97 && ASCIIValue <= 122) {
                let decodedASCII = ((ASCIIValue - 97 - passPhrase + 26) % 26) + 97;
                decodedString += String.fromCharCode(decodedASCII);
            } else {
                decodedString += codedString[i];
            }
        }
        return decodedString;
    }

}

export const crypt = new encryption()