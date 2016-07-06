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
});