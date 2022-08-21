// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface IProject {
  name: string;
  description?: string;
  url: string;
  homepageUrl: string;
  createdAt: string;
}

type Projects = {
  data: {
    user: {
      pinnedItems: {
        nodes: IProject[];
      };
    };
  };
};

type ResponseError = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Projects | ResponseError>
) {
  try {
    const reqOpts = {
      url: 'https://api.github.com/graphql',
      method: 'post',
      headers: {
        Authorization: `Bearer ${process.env.GIT_ACCESS_KEY}`,
      },
      data: {
        query: `{
                user(login: "${process.env.GIT_USERNAME}") {
                  pinnedItems(first: 6, types: REPOSITORY) {
                    nodes {
                      ... on RepositoryInfo {
                        name
                        description
                        url
                        homepageUrl
                        createdAt
                      }
                    }
                  }
                }
              }`,
      },
    };
    const { data } = await axios(reqOpts);
    res.status(200).json(data.data.user.pinnedItems.nodes);
  } catch (error) {
    console.log('Projects Fetcher Error', error);
    res.status(500).json({ message: 'Something went wrong...' });
  }
}
