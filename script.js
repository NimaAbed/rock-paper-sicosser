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
            if(userChoise === "rock"){
                if(computerChoise === "scissors"){
                    console.log("You Win!")
                }else{
                    console.log("You Lose!")
                }
            }
            if(userChoise === "paper"){
                if(computerChoise === "rock"){
                    console.log("You Win!")
                }else{
                    console.log("You Lose!")
                }
            }
            if(userChoise === "scissors"){
                if(computerChoise === "paper"){
                    console.log("You Win!")
                }else{
                    console.log("You Lose!")
                }
            }
        }
    }else{
        console.log("You Wrote Wrong")
        console.log("'Refresh The Site'")
    }
}else{
        console.log("You Are Cheated")
        console.log("'Refresh The Site'")
}