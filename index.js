const mongoose = require('mongoose');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to db
const db = mongoose.connect('mongodb://127.0.0.1:27017/customercli',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Import Models
const Customer = require('./models/customer');

// Add Customer
const addCustomer = (customer)=>{
    Customer.create(customer).then(customer =>{
        console.info('New Customer Added');
    });
}

// Find Customer
const findCustomer = (name) =>{
    // Make Case Insensitive
    const search = new RegExp(name, 'i');
    Customer.find({$or : [{firstname: search}, {lastname: search}]})
        .then(customer =>{
            console.info(customer);
            console.info(`${customer.length} matches`);
        });

}

// Update a Customer
const updateCustomer = (_id,customer) =>{
    Customer.update({_id}, customer)
        .then(customer => {
            console.info('Customer Updated');
        });
}
// Remove a customer
const removeCustomer = (_id) =>{
    Customer.remove({_id})
        .then(customer => {
            console.info('Customer Removed');
        });
}

// List Customers
const listCustomer = ()=>{
    Customer.find()
    .then(customers =>{
        console.info(customers);
        console.info(`${customers.length} customers`);
    });
}

// Export all methods
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
}