// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Band = require('./models/band');
const Photo = require('./models/photo')

// Local variables will come in handy for holding retrieved documents
let user, photo, order;
let users, photos, orders;