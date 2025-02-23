// Routes => กำหนดเส้นทางของแต่ละคำสั่งว่าเริ่มต้นและจบลงที่ไหน

const express = require('express')
const router = express.Router()
const {read, list, create, update, remove} = require('../controllers/product')

//http://localhost:5000/api/product
router.get('/product', list)  //get
router.get('/product/:id', read)  //getId
router.post('/product', create)  //post
router.put('/product/:id', update)  //put
router.delete('/product/:id', remove)  //delete

module.exports = router