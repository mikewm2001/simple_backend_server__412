const express = require('express');
const bodyParser = require('body-parser');
const ps2Router = require('./routes/ps2');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Set Pug as the view engine
app.set('view engine', 'pug');

// Specify the directory where your views are located (assuming 'views' folder)
app.set('views', path.join(__dirname, 'views'));

// Mount the ps2Router on /ps2
app.use('/ps2', ps2Router);

// Default route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the root path!');
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


