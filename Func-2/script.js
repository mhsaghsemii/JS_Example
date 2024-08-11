// let Definition for Output the Result
let output

// Function for Return the Last Character of The Word
function lastCHar(Word){

// Compare two Variable to See If the Word is String or Not
//  If the Word is String
    if(typeof Word == String){
        // Show Last Character
        output = Word[Word.length -1]
    }

    // If the Word isn't String
    else{

        // Show 
        output = "String Has Zero Length"
    }

    return output
}

// Print Result
console.log(lastCHar("Hello World !"))