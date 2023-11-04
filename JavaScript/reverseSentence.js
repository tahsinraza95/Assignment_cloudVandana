function reverseWords(sentence) {
    return sentence.split(/\s+/).map(word => word.split('').reverse().join('')).join(' ');
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (input) => {
  const reversedSentence = reverseWords(input);
  console.log('Reversed sentence:', reversedSentence);
  rl.close();
});
