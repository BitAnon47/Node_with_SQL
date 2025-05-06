const express = require('express');
const customerController = require('../controllers/customerController');

function setRoutes(app) {
  const router = express.Router();

  // Welcome route
  router.get('/', (req, res) => {
    res.send('Welcome to the Node SQL Project!');
  });

  // Customer routes
  router.post('/customers', customerController.createCustomer);
  router.get('/getcustomers', customerController.getAllCustomers);
  router.get('/customers/:id', customerController.getCustomerById); 
  router.put('/customers/:id', customerController.updateCustomer); // Update customer
  router.delete('/customers/:id', customerController.deleteCustomer); // Delete customer
  
  app.use('/', router);
}

module.exports = setRoutes;