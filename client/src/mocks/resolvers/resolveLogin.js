import mockUser from '../mockUser';

const resolveLogin = (req, res, ctx) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res(
      ctx.status(400),
      ctx.json({
        status: 400,
        error: 'test error',
      })
    );
  }

  return res(
    ctx.json({
      user: mockUser,
      token: 'Bearer token',
    })
  );
};

export default resolveLogin;
