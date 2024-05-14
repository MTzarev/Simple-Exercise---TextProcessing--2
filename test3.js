function test3(text, word) {
let numToRepeat = word.length;
let repeatWord = `*`.repeat(numToRepeat)
let newText = text.replace(word, repeatWord)
    console.log(newText);
}
test3('A small sentence with some words',

'small')