/* eslint-disable import/prefer-default-export */
import HTTP from './posts.service';

export const getPosts = () => HTTP.get('/posts').then(({ data }) => data);
