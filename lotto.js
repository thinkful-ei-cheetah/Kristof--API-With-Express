'use strict';

module.exports = lotto;


function lotto(arr = [2,4,6,8,10,12]){
  let counter = 0;
  const random = [null, null, null, null, null, null].map(_ => Math.floor((Math.random()*20)+1) 
  );
  arr.forEach(entry => {
    if ( random.includes(Number(entry)) ){
      counter++;
    }
  });
  return counter === 6 ?
    'Wow! Unbelievable! You could have won the mega millions!' :
    counter === 5 ?
      'Congratulations! You win $100!' :
      counter === 4 ? 'Congratulations, you win a free ticket' : 'Sorry, you lose';
}
