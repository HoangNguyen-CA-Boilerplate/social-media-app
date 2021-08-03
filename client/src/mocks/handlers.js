import { rest } from 'msw';
import { mockLogin } from './resolvers/mockLogin';

export const handlers = [
  rest.post('http://localhost/api/users/login', mockLogin),

  rest.post('http://localhost/api/users/register', mockLogin),
];
