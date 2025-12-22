import type {NextApiRequest, NextApiResponse} from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({error: 'Method not allowed'});
  }

  try {
    const github = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    const response = await github.get(`/users/hamza7malik/repos`);

    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return res.status(500).json({error: 'Failed to fetch repositories'});
  }
}
