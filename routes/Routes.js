const express = require('express');
const { addIncome, getIncome, updateIncome, getExpenses, addExpense, deleteExpense }  = require("../Controller/Income.js");
const { SignUp, userLogin } = require('../Controller/SignUp.js');
const verifyToken = require('../middleware/verifyauth.js');

const routes = express.Router();
routes.route('/signup').post(SignUp);
routes.post('/login',verifyToken,userLogin);

routes.post('/products',verifyToken,addIncome)
routes.post('/products/expense',verifyToken,addExpense)
routes.get('/products/:userId',verifyToken,getIncome)
routes.get('/products/expense/:userId',verifyToken,getExpenses)
routes.delete('/products/:id',verifyToken,updateIncome)
routes.delete('/products/expense/:id',verifyToken,deleteExpense)


module.exports =  routes;