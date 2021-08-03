import { rest } from 'msw';
import resolveLogin from './resolvers/resolveLogin';

export const handlers = [
  rest.post('http://localhost/api/users/login', resolveLogin),

  rest.post('http://localhost/api/users/register', resolveLogin),
];
