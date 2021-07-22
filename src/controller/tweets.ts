import { Request, Response } from 'express';
import * as TweetsRepository from '../data/tweets';

export async function getTweets(req: Request, res: Response): Promise<void> {
  const tweets = await TweetsRepository.getAll();
  res.status(200).json(tweets);
}
