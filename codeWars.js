function rgb(r, g, b) {
    var rgbresult = ``;


    if (r < 0) {
        rgbresult += "0"
    } else if (r > 255) {
        rgbresult += "F"
    } else {
        valueR = Math.floor(r / 16)
        switch (valueR) {
            case 0:
                rgbresult += "0"
                break;
            case 1:
                rgbresult += "1"
                break;
            case 2:
                rgbresult += "2"
                break;
            case 3:
                rgbresult += "3"
                break;
            case 4:
                rgbresult += "4"
                break;
            case 5:
                rgbresult += "5"
                break;
            case 6:
                rgbresult += "6"
                break;
            case 7:
                rgbresult += "7"
                break;
            case 8:
                rgbresult += "8"
                break;
            case 9:
                rgbresult += "9"
                break;
            case 10:
                rgbresult += "A"
                break;
            case 11:
                rgbresult += "B"
                break;
            case 12:
                rgbresult += "C"
                break;
            case 13:
                rgbresult += "D"
                break;
            case 14:
                rgbresult += "E"
                break;
            case 15:
                rgbresult += "F"
                break;
        }
    }
    if (r < 0) {
        rgbresult += "0"
    } else if (r > 255) {
        rgbresult += "F"
    } else {
        switch (r % 16) {
            case 0:
                rgbresult += "0"
                break;
            case 1:
                rgbresult += "1"
                break;
            case 2:
                rgbresult += "2"
                break;
            case 3:
                rgbresult += "3"
                break;
            case 4:
                rgbresult += "4"
                break;
            case 5:
                rgbresult += "5"
                break;
            case 6:
                rgbresult += "6"
                break;
            case 7:
                rgbresult += "7"
                break;
            case 8:
                rgbresult += "8"
                break;
            case 9:
                rgbresult += "9"
                break;
            case 10:
                rgbresult += "A"
                break;
            case 11:
                rgbresult += "B"
                break;
            case 12:
                rgbresult += "C"
                break;
            case 13:
                rgbresult += "D"
                break;
            case 14:
                rgbresult += "E"
                break;
            case 15:
                rgbresult += "F"
                break;
        }
    }

    if (g < 0) {
        rgbresult += "0"
    } else if (g > 255) {
        rgbresult += "F"
    } else {
        valueG = Math.floor(g / 16)
        switch (valueG) {
            case 0:
                rgbresult += "0"
                break;
            case 1:
                rgbresult += "1"
                break;
            case 2:
                rgbresult += "2"
                break;
            case 3:
                rgbresult += "3"
                break;
            case 4:
                rgbresult += "4"
                break;
            case 5:
                rgbresult += "5"
                break;
            case 6:
                rgbresult += "6"
                break;
            case 7:
                rgbresult += "7"
                break;
            case 8:
                rgbresult += "8"
                break;
            case 9:
                rgbresult += "9"
                break;
            case 10:
                rgbresult += "A"
                break;
            case 11:
                rgbresult += "B"
                break;
            case 12:
                rgbresult += "C"
                break;
            case 13:
                rgbresult += "D"
                break;
            case 14:
                rgbresult += "E"
                break;
            case 15:
                rgbresult += "F"
                break;
        }
    }

    if (g < 0) {
        rgbresult += "0"
    } else if (g > 255) {
        rgbresult += "F"
    } else {
        switch (g % 16) {
            case 0:
                rgbresult += "0"
                break;
            case 1:
                rgbresult += "1"
                break;
            case 2:
                rgbresult += "2"
                break;
            case 3:
                rgbresult += "3"
                break;
            case 4:
                rgbresult += "4"
                break;
            case 5:
                rgbresult += "5"
                break;
            case 6:
                rgbresult += "6"
                break;
            case 7:
                rgbresult += "7"
                break;
            case 8:
                rgbresult += "8"
                break;
            case 9:
                rgbresult += "9"
                break;
            case 10:
                rgbresult += "A"
                break;
            case 11:
                rgbresult += "B"
                break;
            case 12:
                rgbresult += "C"
                break;
            case 13:
                rgbresult += "D"
                break;
            case 14:
                rgbresult += "E"
                break;
            case 15:
                rgbresult += "F"
                break;
        }
    }

    if (b < 0) {
        rgbresult += "0"
    } else if (b > 255) {
        rgbresult += "F"
    } else {
        valueB = Math.floor(b / 16)
        switch (valueB) {
            case 0:
                rgbresult += "0"
                break;
            case 1:
                rgbresult += "1"
                break;
            case 2:
                rgbresult += "2"
                break;
            case 3:
                rgbresult += "3"
                break;
            case 4:
                rgbresult += "4"
                break;
            case 5:
                rgbresult += "5"
                break;
            case 6:
                rgbresult += "6"
                break;
            case 7:
                rgbresult += "7"
                break;
            case 8:
                rgbresult += "8"
                break;
            case 9:
                rgbresult += "9"
                break;
            case 10:
                rgbresult += "A"
                break;
            case 11:
                rgbresult += "B"
                break;
            case 12:
                rgbresult += "C"
                break;
            case 13:
                rgbresult += "D"
                break;
            case 14:
                rgbresult += "E"
                break;
            case 15:
                rgbresult += "F"
                break;
        }
    }


    if (b < 0) {
        rgbresult += "0"
    } else if (b > 255) {
        rgbresult += "F"
    } else {
        switch (b % 16) {
            case 0:
                rgbresult += "0"
                break;
            case 1:
                rgbresult += "1"
                break;
            case 2:
                rgbresult += "2"
                break;
            case 3:
                rgbresult += "3"
                break;
            case 4:
                rgbresult += "4"
                break;
            case 5:
                rgbresult += "5"
                break;
            case 6:
                rgbresult += "6"
                break;
            case 7:
                rgbresult += "7"
                break;
            case 8:
                rgbresult += "8"
                break;
            case 9:
                rgbresult += "9"
                break;
            case 10:
                rgbresult += "A"
                break;
            case 11:
                rgbresult += "B"
                break;
            case 12:
                rgbresult += "C"
                break;
            case 13:
                rgbresult += "D"
                break;
            case 14:
                rgbresult += "E"
                break;
            case 15:
                rgbresult += "F"
                break;
        }
    }

    return rgbresult
}

function anagrams(word, words) {
    let compare = words.map(function (x) {
        return x.split('').sort().join('')
    })
    if (compare === word.split('').sort().join('')) {
        return words
    }
}


function anagramss(word, words) {
    let newArr = []
    let compare = word.split('').sort().join('')

    for (i = 0; i < words.length; i++) {

        let sortWord = words[i].split('').sort().join('')
        if (sortWord === compare) {
            newArr.push(words[i])

        }
    }
    return newArr
}



function generateHashtag(str) {

    let redStr = str.trim()
    if (redStr == "") {
        return 'false'
    } else if (redStr.length > 139) {
        return 'false'
    }
    var separateWords = redStr.toLowerCase().split(' ');
    for(i=0; i<separateWords.length; i++){
        console.log(separateWords[i])
        separateWords[i] = separateWords[i].charAt(0).toUpperCase() + separateWords[i].substring(1);
        console.log(separateWords[i])
    }
    separateWords = separateWords.join('');

    let finalResult = "#"+ separateWords
    return finalResult

}









/*if(str == ""){
  return 'false'
}
let arrStr = [...str]
return arrStr.join('')
}
*/


function doubleNumbers(arr){
    return arr.map(el => (el * 2).toString())
}

function capitalizeName(arr){
    return arr.map(el => el.toLowerCase().charAt(0).toUpperCase() + el.toLowerCase().slice(1))
}

function namesOnly(arr){
    return arr.map(el => el.name)
}

var x = 220;
var y = "Hello";
var z = undefined;
        
x || y    // Returns 220 since the first value is truthy
        
x || z   // Returns 220 since the first value is truthy
        
x && y    // Returns "Hello" since both the values are truthy
        
y && z   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}