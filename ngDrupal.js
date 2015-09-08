'use strict';
angular.module('stefanoschrs.ngDrupal', [])
.factory('Drupal', ['$http', function($http){
	var api;

	var init 	= function(settings){
		api = settings.path;
	};

	var login 	= function(user, done){
		$http.post(api+'user/login.json', {
			username: user.username,
			password: user.password
		})
		.success(function(res){
			done(null, res);
		})
		.error(function(err){
			done(err);
		});
	};

	var views 	= function(path, done){
		$http.get(api+'views/'+path)
		.success(function(res){
			done(null, res);
		})
		.error(function(err){
			done(err);
		});
	};
	
	return {
		init 	: init,
		login 	: login,
		views 	: views
	}
}]);