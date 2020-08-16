const test = require('ava');

test.beforeEach(t => {
  t.context = {
    authenticator: {
      authenticate: (credentials) => { return credentials.username === 'foo' && credentials.password === 'bar' },
    },
    credentials: { username: 'foo', password: 'bar' }
  };
});

test('authenticating with valid credentials', async t => {
  const isValid = t.context.authenticator.authenticate(t.context.credentials);
  t.true(await isValid);
});

test('authenticating with an invalid username', async t => {
  t.context.credentials.username = 'bad_username';
  const isValid = t.context.authenticator.authenticate(t.context.credentials);
  t.false(await isValid);
});

test('authenticating with an invalid password', async t => {
  t.context.credentials.password = 'bad_password';
  const isValid = t.context.authenticator.authenticate(t.context.credentials);
  t.false(await isValid);
});