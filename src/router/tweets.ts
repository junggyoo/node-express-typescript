import express from 'express';
import * as TweetController from '../controller/tweets';
const router = express.Router();

export default router.get('/', TweetController.getTweets);
