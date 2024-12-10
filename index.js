import express from "express";
import bodyParser from "body-parser";
import axios from 'axios';

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000;

app.get('/', (req, res) => {
  //'https://dummyjson.com/products?limit=10&skip=10&select=title,price'



  axios.get('https://dummyjson.com/recipes')
    .then(function (response) {
      res.render('index.ejs', {
        recipes: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });

});
//'
app.get('/post/:id', (req, res) => {
  console.log(req.params);

  axios.get(`https://dummyjson.com/recipes/1${req.params['id']}`)
    .then(function (response) {
      console.log(response.data);
      res.render('post.ejs', {
        recipes: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });

});

app.listen(port, () => console.log(`listening on port ${port}`));
