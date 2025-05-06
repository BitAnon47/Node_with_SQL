const { sql } = require('../config/db');

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const { name, age, gender, phoneNumber } = req.body;

    const [result] = await sql.execute(
      'INSERT INTO customers (name, age, gender, phoneNumber) VALUES (?, ?, ?, ?)',
      [name, age, gender, phoneNumber]
    );

    res.status(201).json({ message: 'Customer created successfully', result });
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const [customers] = await sql.execute('SELECT * FROM customers');
    res.json(customers);
  } catch (error) {
    console.error('Error retrieving customers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;

    const [customer] = await sql.execute('SELECT * FROM customers WHERE id = ?', [id]);

    if (customer.length === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json(customer[0]);
  } catch (error) {
    console.error('Error retrieving customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a customer
exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, gender, phoneNumber } = req.body;

    const [result] = await sql.execute(
      'UPDATE customers SET name = ?, age = ?, gender = ?, phoneNumber = ? WHERE id = ?',
      [name, age, gender, phoneNumber, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json({ message: 'Customer updated successfully' });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await sql.execute('DELETE FROM customers WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};