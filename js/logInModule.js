function logInModule(){
	this._username;
	this._password;
};

logInModule.prototype.setUsername = function(name){
	this._username = name;
};

logInModule.prototype.getUsername = function(){
	return this._username;
};