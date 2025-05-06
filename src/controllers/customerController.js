const Customer = require('../models/User');

// Create a new customer

const { sequelize } = require('../config/db');

// Create a new customer using raw SQL
exports.createCustomer = async (req, res) => {
  try {
    const { name, age, gender, phoneNumber } = req.body;

    // Log the incoming request data
    console.log('Request Data:', { name, age, gender, phoneNumber });

    // Raw SQL query to insert a new customer
    const [result] = await sequelize.query(
      'INSERT INTO customers (name, age, gender, phoneNumber) VALUES (?, ?, ?, ?)',
      {
        replacements: [name, age, gender, phoneNumber], // Replace placeholders with actual values
      }
    );

    // Log the result of the query
    console.log('Customer Created:', result);

    res.status(201).json({ message: 'Customer created successfully', result });
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a customer using raw SQL
exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params; // Get customer ID from URL
    const { name, age, gender, phoneNumber } = req.body; // Get updated data from request body

    const [result] = await sequelize.query(
      'UPDATE customers SET name = ?, age = ?, gender = ?, phoneNumber = ? WHERE id = ?',
      {
        replacements: [name, age, gender, phoneNumber, id],
      }
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    console.log('Customer Updated:', result);

    res.json({ message: 'Customer updated successfully' });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a customer using raw SQL
exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params; // Get customer ID from URL

    const [result] = await sequelize.query('DELETE FROM customers WHERE id = ?', {
      replacements: [id],
    });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    console.log('Customer Deleted:', result);

    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Get all customers using raw SQL
exports.getAllCustomers = async (req, res) => {
  try {
    // Raw SQL query to fetch all customers
    const [customers] = await sequelize.query('SELECT * FROM customers');

    // Log the retrieved customers
    console.log('Retrieved Customers:', customers);

    res.json(customers);
  } catch (error) {
    console.error('Error retrieving customers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a customer by ID using raw SQL
exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params; // Get customer ID from URL

    // Raw SQL query to fetch a customer by ID
    const [customer] = await sequelize.query('SELECT * FROM customers WHERE id = ?', {
      replacements: [id],
    });

    if (customer.length === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json(customer[0]); // Return the first (and only) customer
  } catch (error) {
    console.error('Error retrieving customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

