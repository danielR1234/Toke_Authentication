import { postEmail, postToken, postTokenAndTan } from './../controllers/user'
import express from 'express'

const router = express.Router()

router.route('/token').post(postToken)
router.route('/email').post(postEmail)
router.route('/hash').post(postTokenAndTan)

export default router
