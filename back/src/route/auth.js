// // Підключаємо роутер до бек-енду
// const express = require('express')
// const router = express.Router()

// const { User } = require('../class/user')

// // Підключіть файли роутів
// router.get('/signup', function (req, res) {
//   return res.render('signup', {
//     name: 'signup',

//     component: [],

//     title: 'Signup page',

//     data: {
//       role: [
//         { value: User.USER_ROLE.USER, text: 'Користувач' },
//         {
//           value: User.USER_ROLE.ADMIN,
//           text: 'Адміністратор',
//         },
//         {
//           value: User.USER_ROLE.DEVELOPER,
//           text: 'Розробник',
//         },
//       ],
//     },
//   })
// })
// // const test = require('./test')
// // Підключіть інші файли роутів, якщо є
// const auth = require('./auth')
// // Об'єднайте файли роутів за потреби
// router.use('/', auth)
// // router.use('/', test)
// // Використовуйте інші файли роутів, якщо є

// // Експортуємо глобальний роутер
// module.exports = router
