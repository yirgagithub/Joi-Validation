import express from 'express'
import Joi from 'joi'

import { blogPostJoiSchema } from './joi-schemas/blogPostJoiSchema'
import { middleware } from './middleware/middlewareValidation'

const router = express.Router()

// generic route handler
const genericHandler = (req, res, next) => {
  res.json({
    status: 'success',
    data: req.body
  })
}

const blogPostHandler = (req, res, next) => {
    console.log("If valid handle the request")
}

// create a new teacher or student
router.post('/blogPost', middleware(blogPostJoiSchema), blogPostHandler);

// change auth credentials for teachers
router.post('/auth/edit', genericHandler);

// accept fee payments for students
router.post('/fees/pay', genericHandler);

module.exports = router