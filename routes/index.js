const express = require('express');
const router = express.Router();
const userControl= require('../controllers/userControl');

router.get('/ipwd', userControl.getAllUsers);

router.post('/ipwd', userControl.createUserAccount);

router.put('/ipwd', userControl.updateUserAccount);

router.delete('/ipwd', userControl.deleteUserAccount);
module.exports=router;