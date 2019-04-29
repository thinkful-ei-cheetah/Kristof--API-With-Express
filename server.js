'use strict';

const express = require('express');
const morgan = require('morgan');
const app = express();
const cipher = require('./cipher');
const lotto = require('./lotto');

app.use(morgan('dev'));


app.get('/sum', (req, res)=>{
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`The sum of a and b is ${a+b}`);
  
});

app.get('/cipher', (req, res)=>{
  const text = req.query.text;
  const shift = Number(req.query.shift);
  res.send(cipher(text, shift));
});

app.get('/lotto', (req, res)=>{

  const entry = req.query.entry;
  if (entry.length === 6){
    res.send(lotto(entry));
  } else res.send('Wrong argument length');

});


app.listen(3000, ()=>{
  console.log('Server has started!!');
});

