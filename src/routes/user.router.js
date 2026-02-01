const express = require('express');
const userController = require('../controllers/user.controller.js')
const router = express.Router();
const validateUser= require('../middlewares/inputValidator.js')

router.get('/user', userController.getAllUsers);
router.get('/user/:id',userController.getUserById);
router.post('/user',validateUser,userController.createUser);
router.put('/user/:id',validateUser,userController.updateUser);
router.delete('/user/:id',userController.deleteUser);

module.exports = router;

