export const mockLogin = (req, res, ctx) => {
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
      user: { _id: '12345', email: 'bob@gmail.com' },
      token: 'Bearer 12345',
    })
  );
};
