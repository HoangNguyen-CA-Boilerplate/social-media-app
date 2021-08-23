import { rest } from 'msw';
import resolveLogin from './resolvers/resolveLogin';
import resolveSignup from './resolvers/resolveSignup';
import mockPost from './mockPost';
import mockUser from './mockUser';

export const handlers = [
  rest.post('http://localhost/api/auth/login', resolveLogin),

  rest.post('http://localhost/api/auth/register', resolveSignup),

  rest.get('http://localhost/api/users/', (req, res, ctx) => {
    return res(ctx.status(400), ctx.json({ status: 400, error: 'test error' }));
  }),

  rest.get('http://localhost/api/posts/', (req, res, ctx) => {
    return res(ctx.json([mockPost]));
  }),

  rest.get('http://localhost/api/users/:username', (req, res, ctx) => {
    return res(ctx.json(mockUser));
  }),

  rest.get('http://localhost/api/users/:username/posts', (req, res, ctx) => {
    return res(ctx.json([mockPost]));
  }),

  rest.get('http://localhost/api/posts/:id', (req, res, ctx) => {
    return res(ctx.json(mockPost));
  }),
];
