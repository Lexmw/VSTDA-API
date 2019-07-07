const express = require('express');
const morgan = require('morgan');

const PORT = 8484;
const app = express();

const data = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];

// add your code here

app.get('/', (req, res) => {
    res.send({status: 'ok'}).statusCode(200);
});

app.get('/api/TodoItems', (req, res) =>{

});


module.exports = app;
