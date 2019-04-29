'use strict';

const express = require('express');
const morgan = require('morgan');
const app = express();
const cipher = require('./cipher');

app.use(morgan('dev'));


app.get('/sum', (req, res)=>{
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`The sum of a and b is ${a+b}`);
  
});
// /cipher. The handler function should accept a query parameter named text and a one named shift. Encrypt the text using a simple shift cipher also known as a Caesar Cipher. It is a simple substitution cipher where each letter is shifted a certain number of places down the alphabet. So if the shift was 1 then A would be replaced by B, and B would be replaced by C and C would be replaced by D and so on until finally Z would be replaced by A. using this scheme encrypt the text with the given shift and return the result to the client. Hint - String.fromCharCode(65) is an uppercase A and 'A'.charCodeAt(0) is the number 65. 65 is the integer value of uppercase A in UTF-16. See the documentation for details.

app.get('/cipher', (req, res)=>{
  const text = req.query.text;
  const shift = Number(req.query.shift);

  res.send(cipher(text, shift));

  
});




app.listen(3000, ()=>{
  console.log('Server has started!!');
});

