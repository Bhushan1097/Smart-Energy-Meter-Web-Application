const express = require('express');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const app = express();
const port = 3000;

// Import user and consumption models
const User = require('./models/user'); // Adjust the path based on your project structure
const Consumption = require('./models/consumption'); // Adjust the path as necessary
const Billing = require('./models/billing');
// Connect to MongoDB
main()
    .then(() => console.log("Connection to MongoDB successful"))
    .catch((err) => console.log(err)); // Log connection errors

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/SmartEnergyMeter");
}

// Set the view engine to EJS and use ejsMate
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

// Middleware to serve static files and parse form data
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes

// Dashboard route
app.get('/dashboard', async (req, res) => {
    try {
        // Fetch user by mac_Id (assuming it's stored in req.user or provided in the request)
        const user = await User.findOne({ mac_Id: 'MAC00123A' }); // Replace 'MAC00123A' with a dynamic input if needed

        if (!user) {
            console.log('No user data found');
            return res.status(404).send('User not found');
        }

        // Fetch consumption data for the user
        const consumption = await Consumption.findOne({ mac_Id: user.mac_Id });

                // Fetch consumption data for the user
        const billing = await Billing.findOne({ mac_Id: user.mac_Id  });
        
        console.log(billing);
        // Render the dashboard page with user and consumption data
        res.render('pages/dashboard', { user, consumption: consumption || null,billing });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching dashboard data');
    }
});

// Other routes
app.get('/billing', (req, res) => res.render('pages/billing'));
app.get('/alerts', (req, res) => res.render('pages/alerts'));
app.get('/profile', (req, res) => res.render('pages/profile'));
app.get('/support', (req, res) => res.render('pages/support'));

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// Session management
// app.use(session({
//     secret: 'smart-energy-secret',
//     resave: false,
//     saveUninitialized: true,
// }));

// Middleware to check if the user is authenticated

// function isAuthenticated(req, res, next) {
//     if (req.session.user) {
//         return next();
//     } else {
//         res.redirect('/login');
//     }
// }

// Routes

// app.get('/login', (req, res) => {
//     res.render('pages/login');
// });

// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     console.log( {username, password});
//     const user = await User.findOne({ username });

//     console.log(user);

//     if (!user) {
//         console.log('User not found');
//         return res.send('Invalid username or password');
//     }

//     if (password === user.password) {  // Comparing plain text passwords
//         req.session.user = user;
//         req.session.save(() => {
//             console.log('User authenticated, session saved');
//             res.redirect('/dashboard');
//         });
//     } else {
//         console.log('Invalid password');
//         res.send('Invalid username or password');
//     }
// });

// Registration route
// app.get('/register', (req, res) => {
//     res.render('pages/register');
// });

// app.post('/register', async (req, res) => {
//     const { username, password, mac_Id, name, email, mobile_no, current_address, current_pincode, permanent_address, permanent_pincode } = req.body;

//     const newUser = new User({
//         username,
//         password,  
//         mac_Id,
//         name,
//         email,
//         mobile_no,
//         current_address,
//         current_pincode,
//         permanent_address,
//         permanent_pincode,
//     });

//     await newUser.save();
//     res.redirect('/login');
// });

