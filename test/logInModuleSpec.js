describe('logInModule',function(){
	var lim, username, password;

	beforeEach(function(){
		lim = new logInModule();
		username = 'jeremy'
		password = '1234test'
	});

	it('sets the username',function(){
		lim.setUsername(username);
		expect(lim.getUsername()).toEqual(username);
	});

	it('sets the password', function(){
		lim.setPassword(password);
		expect(lim.getPassword()).toEqual(password);
	});

	it('sets the authorisation token', function(){
		lim.setToken(token);
		expect(lim.getToken).toEqual(token);
	});
});