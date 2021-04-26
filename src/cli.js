import readlineSync from 'readline-sync';


const makeGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`)
  return false;
}



export {makeGreeting}