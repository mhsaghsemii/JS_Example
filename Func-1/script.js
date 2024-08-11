// let Definition for Output the Result
let output

// Object Definition For Introduce each Users 
let users={
    user1:{
        name:"Mahsa",
        lastName:"Ghasemi",
        score:20
    },
    
    user2:{
        name:"Niki",
        lastName:"Bagheri",
        score:19
    },
    
    user3:{
        name:"AmirHossein",
        lastName:"Keshavarz",
        score:18
    },
    
    user4:{
        name:"Reza",
        lastName:"Fouladi",
        score:17
    }
}

// Function for Return Letter of Introduction
function present(users){
    // Recommendation Letter
    output = `Hey there, ${users.name} ${users.lastName}'s Score Is => ${users.score}`
    // Return Present
    return output
}

// Print Result
console.log(present(users.user1))
console.log(present(users.user2))
console.log(present(users.user3))
console.log(present(users.user4))