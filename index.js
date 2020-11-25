const express = require('express');
const app = express();
const path = require('path');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index.html');
});

const server = app.listen(3000, () => {
    console.log(`The application started on port ${server.address().port}`);
});