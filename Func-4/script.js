// let Definition for Output the Result
let output

// Function for Return All Elements From an Array and Included in a New Array
function merge(Array1,Array2){
    // Merge 2 Array1 and Array2 and Show Succession
    output = [...Array1,...Array2]

    // Return a New Array
    return output
}

// Print Result
console.log(merge(['Ali', 'Mammad'], ['Fati','Zari']));
