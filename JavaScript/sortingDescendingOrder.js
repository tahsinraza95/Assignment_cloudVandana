const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an array (comma-separated values): ', (input) => {
  
  const array = input.split(',').map(item => parseInt(item.trim()));

  
  array.sort((a, b) => b - a);

  console.log('Sorted array in descending order:', array);
  rl.close();
});
