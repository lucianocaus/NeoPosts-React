/* eslint-disable import/prefer-default-export */
import HTTP from './HTTP';

export const getPosts = () => HTTP().get('/posts').then(({ data }) => data);

export const createPost = (title, body) => HTTP().post(
  '/posts',
  {
    post: {
      title,
      body,
      publishedAt: Date.now(),
    },
  },
);
