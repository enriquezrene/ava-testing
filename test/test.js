const test = require('ava');

test('foo', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});

test('testing string', t => {
  const a = 'Rene Enriquez'
  const b = 'Rene Enriquez'

  t.is(a, b)
})