require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require('./middlewares/authentication')

const { connectToMongoose } = require('./connection');

const Conference = require('./models/conference');
const Fellowship = require('./models/fellowship');
const Grant = require('./models/grant');
const Journal = require('./models/journal');
const Patent = require('./models/patent');
const Publication = require('./models/publication');
const User = require('./models/user')

const userRoute = require('./routes/user')

const app = express();
const PORT = process.env.PORT || 8000;

connectToMongoose(process.env.MONGODB_URL)
    .then(() => { console.log("MongoDB Connected!") })
    .catch((err) => { console.log("MongoDB Connection Error: ", err) });

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(checkForAuthenticationCookie('token'))
app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
    return res.render('home', { user: req.user });
})

app.use('/user', userRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})