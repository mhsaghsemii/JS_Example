// Get the Number of Rows Line
let rows ;

// Make a Triangle Star Pattern Using Function
function star(rows){

    //  for loop to iterate through the number of rows
    // Upper left triangle
    for (let i = 1; i <= rows; i++) {
        console.log('* '.repeat(i))  
    } 

    // Lower Left Triangle
    for(let j = rows - 1;j<= rows;j--){
        console.log('* '.repeat(j))
    }
}

// Print Triangle Star Pattern
star(3)

