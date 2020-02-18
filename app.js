const express = require('express')
const exphbrs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateNonsense = require('./generate_nonsense')
const app = express()
const port = 3000

app.engine('handlebars', exphbrs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {

  const option = req.body.target

  // 不知道為什麼不能用 {{#if xxx === 'engineer'}} 只能用下面寫法；{{#if}}裡面是不是不能進行計算?查了一陣子找不到只好先換個寫法   
  const career = {
    engineer: '',
    designer: '',
    entrepreneur: '',
  }

  if (option === 'engineer') {
    career.engineer = 'engineer'
  } else if (option === 'designer') {
    career.designer = 'designer'
  } else if (option === 'entrepreneur') {
    career.entrepreneur = 'entrepreneur'
  }
  // 寫完發現同學用了 const result = {[option]:'on'} 這聰明的寫法
  const word = generateNonsense(option)
  res.render('index', { career, word })
})

app.listen(port, () => {
  console.log(`express is listening on http://localhost:${port}`)
})