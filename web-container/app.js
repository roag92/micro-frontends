const express = require('express');
const path = require('path');

const PORT = 8080;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  return res.render('welcome');
});

app.listen(process.env.PORT || PORT, () => console.log(`Web Container running on port: ${PORT}`));
