const express=require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys');
const cookieSession=require('cookie-session');
const passport=require('passport');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');
const app=express();
app.use(
    cookieSession({
        maxAge:30 * 24 * 60 *  60 * 1000,
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
mongoose.connect(keys.mongoURI);
require('./routes/authRoutes')(app);
require('./routes/courseRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);