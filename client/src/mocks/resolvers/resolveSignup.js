import mockUser from '../mockUser';

const resolveLogin = (req, res, ctx) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
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
      token: 'Bearer 12345',
    })
  );
};

export default resolveLogin;
