const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
require('dotenv').config();

const port = 3001;

app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        pass: process.env.PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    }
});

transporter.verify((err, success) => {
    err ? console.log(err) : console.log(`=== server is ready to take messagess: ${success} ===`);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


app.post("/send", function(req, res) {
    let mailOptions = {
        from: `${req.body.mailerState.email}`,
        to: process.env.GMAIL_USER,
        subject: `Message from: ${req.body.mailerState.email}`,
        text: `${req.body.mailerState.message}`,
       };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            res.json({ status: 'fail' });
        } else {
            console.log("Email sent successfully");
            res.json({ status: "success"} );
        }
    });
});
