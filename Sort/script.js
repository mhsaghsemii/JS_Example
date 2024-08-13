// Definition Unsorted Array 
array = [25 , 46 , 89 , 444 , 523,4578 ]
// Show Unsorted Array 
console.log('Unsorted Array = ', array)

// Variable Definition for Tempo of Loop
let tempo
// Variable Definition for Sorted Array
let sortedArray


// Function for Get Unsort Array and Return Sort Array
function sort(tempo){
    // Compare each Index of Array 
    for (let i = 0; i < array.length -1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if(array[j] < array[j+1])
            {
                tempo = array[j]
                array[j] = array[j+1]
                array[j] = tempo
            }
            
        }        
    }
    return array
}

// Print Output of Sorted Array
console.log('Sorted Array = ', sort(array))