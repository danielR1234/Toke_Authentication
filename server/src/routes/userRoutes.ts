import { getUser } from './../controllers/user/getUser.controller'
import {
  postEmail,
  updateUser,
  postToken,
  postTokenAndTan,
} from './../controllers/user'
import express from 'express'

const router = express.Router()

router.route('/token').post(postToken)
router.route('/email').post(postEmail)
router.route('/hash').post(postTokenAndTan)
router.route('/').put(updateUser)
router.route('/:Token').get(getUser)

export default router
