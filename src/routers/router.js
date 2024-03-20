const { Router } = require("express");
const userController = require('../controllers/userController');

const router = Router();

router.get('/users', userController.listAllUsers);
router.get('/users/:id', userController.listUserID);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
