// // Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

const { User } = require('../class/user')

// User.create({
//   email: 'test@mail.com',
//   password: 123,
// })
router.get('/signup', function (req, res) {
  return res.render('signup', {
    name: 'signup',
    component: [],
  })
})
// // Підключіть файли роутів

// router.post('/signup', function (req, res) {
//   const { email, password } = req.body

//   console.log(req.body)

//   if (!email || !password) {
//     return res.status(400).json({
//       message: 'Помилка',
//     })
//   }
//   return res.status(200).json({
//     message: 'Зарееструвався',
//   })
// })
// Експортуємо глобальний роутер
module.exports = router
