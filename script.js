const userChoise = prompt("choise rock,paper,scissors")
const choises = ["rock","paper","scissors"]
const computerChoise = choises[Math.round(Math.random() *3)]

if (!(userChoise === "")){
    if(userChoise === "rock" || userChoise === "paper" || userChoise === "scissors"){
        console.log(`My Choies Is: "${userChoise}"`)
        console.log(`Computer Choies Is: "${computerChoise}"`)
        if(userChoise === computerChoise){
            console.log("It's Tie")
        }else{

        }
    }else{
        console.log("You Wrote Wrong")
    }
}else{
    console.log("You Are Cheated")
}