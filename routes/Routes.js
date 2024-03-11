const express = require('express');
const { addIncome, getIncome, updateIncome, getExpenses, addExpense, deleteExpense }  = require("../Controller/Income.js");

const routes = express.Router();

routes.route('/products').post(addIncome)
routes.route('/products/expense').post(addExpense)
routes.route('/products').get(getIncome)
routes.route('/products/expense').get(getExpenses)
routes.route('/products/:id').delete(updateIncome)
routes.route('/products/expense:id').delete(deleteExpense)


module.exports =  routes;