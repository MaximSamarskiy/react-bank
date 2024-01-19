// // Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// router.get('/signup', function (req, res) {
//   res.render('signup', {
//     name: 'index',

//     component: [],

//     title: 'Home page',

//     data: {
//       tokin: 'fdhgkjdflgdjfdlkffeo455huth77754niotr5y96j',
//     },
//   })
// })
// Підключіть інші файли роутів, якщо є
const auth = require('./signup')
// Об'єднайте файли роутів за потреби
// router.use('/', auth)
router.use('/signup', auth)
app.get('/api/users/:id', function (req, res) {
  res.status(404).send('PIZDEC')
})
// const test = require('./test')

// Використовуйте інші файли роутів, якщо є

// router.get('/', (req, res) => {
//   res.status(200).json('Hello World')
// })

// // Експортуємо глобальний роутер

module.exports = router
