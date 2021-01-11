const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname,'public')));
// template engine
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('views',path.join(__dirname,'resources/views'));
// morgan
app.use(morgan("combined"))

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})