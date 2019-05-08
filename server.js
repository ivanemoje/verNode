const express = require("express");
const app = express();
const port = 3000;
const mysql = require('mysql');
const knex = require ('knex');
const cors = require ('cors');
require('dotenv').config();


//Set to use environment variables

process.env['NODE_ENV'] = 'development';

const db1 = knex ({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
  }
});

console.log(process.env.DB_PASSWORD) 
console.log(process.env.DB_USER)


const db = knex ({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'emoje',
    password : 'emoje',
    database : 'wfp'
  }
});

app.use (cors());


app.listen(port, () => {
 console.log("Server listening on port " + port);
});

app.get('/', (req, res) => {console.log('route working')})

app.get('/api/manifests', (req, res) => {

	db.select('*').from('manifests')
        .then(user => {
            if (user.length) {
                res.json(user)
            } else {
                res.status(404).json('Not found');
            }
        })
        .catch(err => res.status(400).json("Error getting manifests"))
    
})

app.get('/api/crns', (req, res) => {

	db.select('*').from('crn')
        .then(user => {
            if (user.length) {
                res.json(user)
            } else {
                res.status(404).json('Not found');
            }
        })
        .catch(err => res.status(400).json("Error getting crns"))
    
})

app.get('/api/memos', (req, res) => {

	db.select('*').from('memo')
        .then(user => {
            if (user.length) {
                res.json(user)
            } else {
                res.status(404).json('Not found');
            }
        })
        .catch(err => res.status(400).json("Error getting memos"))
    
})

