/* eslint-disable import/prefer-default-export */
import HTTP from './HTTP';

export const getUsers = () => HTTP().get('/users').then(({ data }) => data);
