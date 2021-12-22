const { User } = require('../models');

const userData = [
    {
        username: 'Amy',
        password: 'password123'

    },
    {
        username: 'Sarah',
        password: 'password123'
    },
    {
        username: 'Joe',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;