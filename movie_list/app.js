const express = require('express');
const app = express();
const movieList = require('./movies.json')
const exphbs = require('express-handlebars')
const port = 3000

// express template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');


// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index', { movies: movieList.results })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword;
  const movies = movieList.results.filter(movie => {
    return movie.title.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { movies: movies, keyword: keyword })
})

// use params to get current template engine
app.get('/movies/:movie_id', (req, res) => {
  console.log('req.params.movie_id', req.params.movie_id)
  const movie = movieList.results.find(movie => movie.id.toString() === req.params.movie_id)
  res.render('show', { movie: movie })
})

// start server
app.listen(port, () => {
  console.log(`this is a test app listening on http://localhost:${port}`
  )
})
