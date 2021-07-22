type Tweet = {
  id: string;
  text: string;
  createdAt: Date;
  name: string;
  username: string;
  url?: string;
};

const tweets: Tweet[] = [
  {
    id: '1',
    text: '안녕',
    createdAt: new Date(),
    name: 'Eric',
    username: 'eric',
  },
  {
    id: '2',
    text: '안녕!!!!!!',
    createdAt: new Date(),
    name: 'Ellie',
    username: 'ellie',
  },
];

export async function getAll(): Promise<Tweet[]> {
  return tweets;
}
