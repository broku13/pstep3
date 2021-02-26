const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'cs340_simhap',
    host: 'classmysql.engr.oregonstate.edu',
    password: '8748',
    database: 'cs340_simhap'
});

app.get('/products', (req, res) => {
 db.query("SELECT * FROM Products", (err, result) => {
     if (err){
         console.log(err)
     } else{
         res.send(result);
     }
 })
});

app.get('/orders', (req, res) => {
    db.query("SELECT * FROM Orders", (err, result) => {
        if (err){
            console.log(err)
        } else{
            res.send(result);
        }
    })
   });

app.get('/categories', (req, res) => {
    db.query("SELECT * FROM ProductCategories", (err, result) => {
        if (err){
            console.log(err)
        } else{
            res.send(result);
        }
    })
});

app.get('/customers', (req, res) => {
    db.query("SELECT * FROM Customers", (err, result) => {
        if (err){
            console.log(err)
        } else{
            res.send(result);
        }
    })
});

app.get('/addresses', (req, res) => {
    db.query("SELECT * FROM Addresses", (err, result) => {
        if (err){
            console.log(err)
        } else{
            res.send(result);
        }
    })
});

// app.post('/create', (req, res) =>{
//     const name = req.body.name

// })

app.listen(3001, ()=>{
    console.log("server running")
})