const loginUser = require('./loginUser');

test('Successful login', () => {
    const result = loginUser('user', 'pass');
    expect(result).toBe('Login Successful!');
});

test('Unsuccessful login', () => {
    const result = loginUser('user', 'wrongpassword');
    expect(result).toBe('Login Unsuccessful!');
});
