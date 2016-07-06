function logInModule(){
	this._username;
	this._password;
	this._token;
};

logInModule.prototype.setUsername = function(name){
	this._username = name;
};

logInModule.prototype.getUsername = function(){
	return this._username;
};

logInModule.prototype.setPassword = function(pw){
	this._password = pw;
};

logInModule.prototype.getPassword = function(){
	return this._password;
};

logInModule.prototype.setToken = function(t){
	this._token = t;
};

logInModule.prototype.getToken = function(){
	return this._token;
};