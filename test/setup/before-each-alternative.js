const test = require('ava');

function setup({username = 'foo', password = 'bar'} = {}) {
	return {
		authenticator: {
      authenticate: (credentials) => { return credentials.username === 'foo' && credentials.password === 'bar' },
    },
    credentials: { username, password }
	};
}

test('authenticating with valid credentials', async t => {
	const {authenticator, credentials} = setup();
	const isValid = authenticator.authenticate(credentials);
	t.true(await isValid);
});

test('authenticating with an invalid username', async t => {
	const {authenticator, credentials} = setup({username: 'bad_username'});
	const isValid = authenticator.authenticate(credentials);
	t.false(await isValid);
});

test('authenticating with an invalid password', async t => {
	const {authenticator, credentials} = setup({password: 'bad_password'});
	const isValid = authenticator.authenticate(credentials);
	t.false(await isValid);
});