# Node SQL Project

This project is a Node.js application that uses Sequelize and raw SQL queries to interact with a MySQL database. Below is an overview of the APIs implemented in this project.

---

## Table of Contents
1. [Setup](#setup)
2. [API Endpoints](#api-endpoints)
   - [Welcome Route](#welcome-route)
   - [Create Customer](#create-customer)
   - [Get All Customers](#get-all-customers)
   - [Get Customer by ID](#get-customer-by-id)
   - [Update Customer](#update-customer)
   - [Delete Customer](#delete-customer)

---

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd node-sql-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the `.env` file with your database credentials:
   ```properties
   DB_HOST=127.0.0.1
   DB_USER=root
   DB_PASS=yourpassword
   DB_NAME=mydatabase
   DB_DIALECT=mysql
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## API Endpoints

### 1. Welcome Route
- **Method**: `GET`
- **Endpoint**: `/`
- **Description**: Returns a welcome message.
- **Example**:
  ```bash
  curl http://localhost:3000/
  ```
- **Response**:
  ```text
  Welcome to the Node SQL Project!
  ```

---

### 2. Create Customer
- **Method**: `POST`
- **Endpoint**: `/customers`
- **Description**: Creates a new customer.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "age": 30,
    "gender": "Male",
    "phoneNumber": "1234567890"
  }
  ```
- **Example**:
  ```bash
  curl -X POST http://localhost:3000/customers \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "age": 30, "gender": "Male", "phoneNumber": "1234567890"}'
  ```
- **Response**:
  ```json
  {
    "message": "Customer created successfully",
    "result": { /* Insert result metadata */ }
  }
  ```

---

### 3. Get All Customers
- **Method**: `GET`
- **Endpoint**: `/getcustomers`
- **Description**: Retrieves all customers.
- **Example**:
  ```bash
  curl http://localhost:3000/getcustomers
  ```
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "age": 30,
      "gender": "Male",
      "phoneNumber": "1234567890"
    }
  ]
  ```

---

### 4. Get Customer by ID
- **Method**: `GET`
- **Endpoint**: `/customers/:id`
- **Description**: Retrieves a customer by their ID.
- **Example**:
  ```bash
  curl http://localhost:3000/customers/1
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "gender": "Male",
    "phoneNumber": "1234567890"
  }
  ```

---

### 5. Update Customer
- **Method**: `PUT`
- **Endpoint**: `/customers/:id`
- **Description**: Updates a customer's details.
- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "age": 28,
    "gender": "Female",
    "phoneNumber": "9876543210"
  }
  ```
- **Example**:
  ```bash
  curl -X PUT http://localhost:3000/customers/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "age": 28, "gender": "Female", "phoneNumber": "9876543210"}'
  ```
- **Response**:
  ```json
  {
    "message": "Customer updated successfully",
    "result": { /* Insert result metadata */ }
  }
  ```

---

### 6. Delete Customer
- **Method**: `DELETE`
- **Endpoint**: `/customers/:id`
- **Description**: Deletes a customer by their ID.
- **Example**:
  ```bash
  curl -X DELETE http://localhost:3000/customers/1
  ```
- **Response**:
  ```json
  {
    "message": "Customer deleted successfully"
  }
  ```