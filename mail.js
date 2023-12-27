
    

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like CSS, images, etc.)
app.use(express.static('/ask.html')); // Assuming the ask.html file is in the same directory as your server file.

// Sample form HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ask.html');
});

// Handling form submission
app.post('/send', (req, res) => {
    const { text } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'brothersa020@gmail.com',
            pass: 'mfzj gzxl sqwg oddc',
        },
    });

    // Email options
    const mailOptions = {
        from: 'brothersa020@gmail.com',
        to: 'sahithsa020@gmail.com',
        subject: 'sahith form submitted',
        text: `${text}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);
        }
        console.log('Email sent:', info.response);
        alert('Form submitted successfully!');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

