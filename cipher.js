'use strict';

module.exports= cipher;


function cipher(text='apples to TRz', shift=1){
  let newText=[];

  for (let x = 0; x < text.length; x++){
    newText.push(text.charCodeAt(x));
  }
  return newText.map(item=>{
    if ((item + shift) > 122){
      let overage = item + shift - 122;
      return String.fromCharCode(64 + overage);
    }
    return String.fromCharCode(item+shift);
  }).join('');
  
}
