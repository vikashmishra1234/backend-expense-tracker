const express = require('express');
const { addIncome, getIncome, updateIncome, getExpenses, addExpense, deleteExpense }  = require("../Controller/Income.js");
const { SignUp, userLogin } = require('../Controller/SignUp.js');
const verifyToken = require('../middleware/verifyauth.js');

const routes = express.Router();
routes.route('/signup').post(SignUp);
routes.post('/login',userLogin);

routes.post('/products',addIncome)
routes.post('/products/expense',addExpense)
routes.get('/products/:userId',getIncome)
routes.get('/products/expense/:userId',getExpenses)
routes.delete('/products/:id',updateIncome)
routes.delete('/products/expense/:id',deleteExpense)


module.exports =  routes;
