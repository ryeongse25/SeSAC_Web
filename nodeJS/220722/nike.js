const express = require("express");
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use('/abc', express.static('public'));

app.get('/', (req, res) => {
    res.render("nike");
});

app.listen(port, () => {
    console.log('Server port : ', port);
})