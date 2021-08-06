import { rest } from 'msw';
import resolveLogin from './resolvers/resolveLogin';
import resolveSignup from './resolvers/resolveSignup';

export const handlers = [
  rest.post('http://localhost/api/auth/login', resolveLogin),

  rest.post('http://localhost/api/auth/register', resolveSignup),

  rest.get('http://localhost/api/users/', (req, res, ctx) => {
    return res(ctx.status(400), ctx.json({ status: 400, error: 'test error' }));
  }),
];
