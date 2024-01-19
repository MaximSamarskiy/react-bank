// // Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// // Підключіть файли роутів
// router.get('/', function (req, res) {
//   res.render('index', {
//     name: 'index',

//     component: [],

//     title: 'Home page',

//     data: {},
//   })
// })
// // const test = require('./test')
// // Підключіть інші файли роутів, якщо є
// const auth = require('./auth')
// // Об'єднайте файли роутів за потреби
// router.use('/', auth)
// // router.use('/', test)
// // Використовуйте інші файли роутів, якщо є

// router.get('/', (req, res) => {
//   res.status(200).json('Hello World')
// })

// // Експортуємо глобальний роутер
module.exports = router
