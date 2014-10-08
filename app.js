var express = require('express'),

    exphbs = require('express-handlebars'),
    nodemailer = require('nodemailer');
app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));


app.set('view engine', 'handlebars');


app.get('/', function (req, res) {

    res.render('home');

});



var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'atrinh.server@gmail.com',
        pass: '@Ndy1234'
    }
});

app.post('/public/js', function (req, res) {
    res.send({
        some: JSON.stringify({
            response: 'json'
        })
    })
    var mailOptions = {
        from: req.body.email, // sender address
        to: 'anderson.trinh@gmail.com', // list of receivers
        subject: req.body.name, // Subject line
        text: req.body.message, // plaintext body
        html: '<p> From: ' + req.body.email + "<br>Phone Number: " + req.body.phone + "<br><br>Message: " + req.body.message + '</p>' // html body
    };

   
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
//TEST
});
app.use('/public', express.static('public'));

app.listen(process.env.PORT ||5000);
