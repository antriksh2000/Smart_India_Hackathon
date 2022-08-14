const express = require('express');
const passport = require('passport');
const expressSession = require('express-session');

const User = require('./models/users');

const path = require('path');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/sih2", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
  const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(expressSession({
	secret: "qwerty",
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    // res.locals.success = req.flash('success');
    // res.locals.error = req.flash('error');
    // res.locals.warning = req.flash('warning');
    next();
});


app.get('/',(req,res)=>{
    res.render('register');
});


app.get('/home', (req, res) => {
    res.render('home');
  });

app.post('/register', async (req, res, next) => {
  try {
      const { email, username, password, name, aadharNo, mobileNo, confirmPassword } = req.body;
      const user = new User({ email, username, name, aadharNo, mobileNo });
      const registeredUser = await User.register(user, password);
      req.login(registeredUser, err => {
          if (err) return next(err);
        //   req.flash('success', `Welcome ${registeredUser.username}`);
          res.redirect('/home');
      })
  } catch (e) {
    //   req.flash('error', e.message);
    console.log(e);
      res.redirect('/');
  }
});

app.get('/login', (req, res) => {
  res.render('login');
})
app.post('/login' ,async (req, res) => {
        const { username, password } = req.body;
        console.log(req.body)
        const { user, error } = await User.authenticate()(username, password);
        if(!user && error) {
            next(error);
            console.log(error)
            req.flash('error', 'Please enter valid username or password !');
            return res.redirect('/login');
        }
        req.login(user, function(err) {
            if (err) {
                console.log(err)
                // req.flash('error', 'Please enter valid username or password !');
                return res.redirect('/login');
            };
            res.redirect('/home');
        });
    // req.flash('success', 'welcome back!');
    res.redirect('/');
});

app.get('/form', (req, res) => {
  res.render('dynamicFormsInput');
})
app.get('/logout', (req, res) => {
  req.logout();
  // req.session.destroy();
//   req.flash('success', 'Successfully Logged Out');
  res.redirect('/login');
});

app.listen(5000,()=>{
    console.log('serving on port');
})