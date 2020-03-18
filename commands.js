#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');

const {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
} = require('./index');

// Customer Questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer first name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer last name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer Email Address'
    }
]

program
    .version('1.0.0')
    .description('Client Management System')

// program 
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action((firstname,lastname,phone,email)=>{
//         addCustomer({firstname,lastname,phone,email});
//     });

// Add a Customer
program 
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(()=>{
        prompt(questions).then(answers => addCustomer(answers));
    })

// Find a Customer
program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action(name => findCustomer(name));

// Update a customer
program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action((_id)=>{
        prompt(questions).then(answers => updateCustomer(_id,answers));
    })

// Remove a Customer
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a customer')
    .action(_id => removeCustomer(_id));

// List Customers
program
    .command('list')
    .alias('l')
    .description('List all Customers')
    .action(()=> listCustomer());

program.parse(process.argv);
