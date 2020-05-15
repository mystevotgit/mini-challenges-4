function wordSearch(words, word) {

  let k = 0;
  word = word.split('');

  for (let i=0; i<words.length; i++){
    for (let j=0; j<words[i].length; j++){
      if(words[i][j] === word[0]){
        checkWord(words, word, i, j, k);
      }
    }
  }

  return word.length === 0;

}


function checkWord(words, word, row, col, count){

  words[row][col] = 0;
  count += 1;

  if(row+1 < words.length && words[row+1][col] === word[count]){
    checkWord(words, word, row+1, col, count);
  }

  if(row-1 >= 0 && words[row-1][col] === word[count]){
    checkWord(words, word, row-1, col, count);
  }

  if (col+1 < words[row].length && words[row][col+1] === word[count]){
    checkWord(words, word, row, col+1, count);
  }

  if(col-1 >= 0 && words[row][col-1] === word[count]){
    checkWord(words, word, row, col-1, count);
  }

  if(count === word.length){
    return word.splice(0);
  }
  
  words[row][col] = word[count-1];

}

module.exports = wordSearch;
