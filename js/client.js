// let humanChoice = document.querySelectorAll('button').value
// console.log(humanChoice)
// console.log(humanChoice)
// document.querySelector('button').addEventListener('click', ()=>{
// })


// document.querySelector('#parent').addEventListener('click', function(e){
//   let humanChoice = document.querySelector('button').this
//   console.log(humanChoice)
//   console.log(e.currentTarget === this)
// })

//Notes:
//addEventListener to the parent, event element, and target the child

//human choice
//the button they click on returns a string value connected to that button
document.querySelector('#parent').addEventListener('click', function(e){
  document.querySelector('button').e.target.value
  console.log(e)
})

//computer choice
//randomizing the options of the computer
let randomOption = Math.Random()
if (randomOption < 0.2){
  return "rock"
}if (randomOption <0.4){
  return "paper"
}if (randomOption <0.6){
  return "scissors"
}if (randomOption <0.8){
  return "lizard"
}if (randomOption <0.99){
  return "spock"
}

//compare the human choice and the computer choice
function compareHumanAndComputer(){
  if (humanChoice === computerChoice){
    return "tie"
  }if ()
}
