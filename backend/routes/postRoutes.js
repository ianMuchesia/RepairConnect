

const express = require('express')
const { createPost, getPosts, updatePost, deletePost, getSinglePost } = require('../controllers/postController')
const { authenticateUser, authorizePermission} = require('../middleware/authentication')

const router = express.Router()


router.post('/',authenticateUser, authorizePermission('customer'), createPost)
router.get('/',authenticateUser,  getPosts)
router.patch('/:id',authenticateUser, authorizePermission('customer'), updatePost)
router.delete('/:id',authenticateUser, authorizePermission('customer'), deletePost)
router.get('/:id',authenticateUser, authorizePermission('customer'), getSinglePost)

module.exports = router