const express = require('express')
const {getTasks, createTasks, updateTask, deleteTask, getSingleTask} = require('../controllers/controllers')
const router = express.Router()

router.get('/',getTasks)
router.post('/',createTasks)
router.get('/:id',getSingleTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports = router