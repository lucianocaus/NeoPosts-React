/* eslint-disable import/prefer-default-export */
import HTTP from './HTTP';

export const getPosts = () => HTTP().get('/posts').then(({ data }) => data);
