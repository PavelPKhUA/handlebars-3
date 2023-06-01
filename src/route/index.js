const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    layout: 'default',
    title: 'Home page',
    // text: 'Click me',
  })
})

router.get('/users', function (req, res) {
  res.render('user-list', {
    layout: 'header',
    title: 'User list page',
    h2text: 'Welcome',

    data: {
      userlist: [
        {
          id: 14545,
          name: 'Ivan',
          isAdmin: true,
          isConfirm: true,
          balance: 100,
        },
        {
          id: 14546,
          name: 'Dima',
          isAdmin: false,
          isConfirm: false,
          balance: 0,
        },
        {
          id: 14547,
          name: 'Mikola',
          isAdmin: false,
          isConfirm: true,
          balance: null,
        },
      ],
    },
  })
})

// router.get('/products', function (req, res) {
//   res.render('product', {
//     name: 'Корм для риб',
//     cost: '72.5',
//     img: 'fish.png',
//   })
// })

// hw231
router.get('/products', function (req, res) {
  res.render('hw2-3-1', {
    product: {
      name: 'Корм для риб',
      cost: '72.5',
      img: 'fish.png',
    },
  })
})

router.get('/hw232', function (req, res) {
  res.render('hw2-3-2', {
    user: {
      name: 'Іван',
      email: 'ivan@example.com',
      phone: '123-456-7890',
    },
  })
})

router.get('/hw233', function (req, res) {
  res.render('hw2-3-3', {
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
      isAvailable: true,
    },
  })
})

router.get('/hw234', function (req, res) {
  res.render('hw2-3-4', {
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
      isAvailable: true,
    },
  })
})

router.get('/hw235', function (req, res) {
  res.render('hw2-3-5', {
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
      isAvailable: true,
    },
  })
})

router.get('/hw236', function (req, res) {
  res.render('hw2-3-6', {
    user: {
      name: 'Іван',
      email: 'ivan@example.com',
      phone: '123-456-7890',
      balance: 0,
    },
  })
})

module.exports = router
