describe('main', function(){
	var main;

	beforeEach(function(){
		main = new Main();
	});

	it('creates the apiCaller', function(){
		expect(main.api).toBeDefined();
	});

	it('creates the logInModule', function(){
		expect(main.login).toBeDefined();
	});
});