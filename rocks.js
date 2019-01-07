const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'|| userInput ==='paper'||userInput ==='scissors')
    {
      return userInput; 
   
    }
  else {
    console.log('error');
  }
}
console.log(getUserChoice('rock'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber)

  if (randomNumber=== 0)  {
  return 'rock';}
  else if
    (randomNumber=== 1) {
    return 'paper';
}
else {
 return 'scissors';}
}
console.log(getComputerChoice());


const determineWinner = (userChoice,  computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie';
  }
    if(userChoice ==='rock'){
      if(computerChoice ==='paper'){
        return 'computer won';}
       else {
         return 'user won';
       }
      }
   if(userChoice ===  'paper'){
     if(computerChoice === 'scissors'){
       return 'computer won';
     }
     else {
         return 'user won';
       }
   }
     if(userChoice ===  'scissors'){
     if(computerChoice === 'rock'){
       return 'computer won';
     }
       else {
         return 'user won';
       }
   }
  }
  

console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); 

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  determineWinner(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

console.log(playGame());


