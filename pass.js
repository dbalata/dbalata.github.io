var app = angular.module('passApp', []);


app.controller('ctrl', function($scope) 
{
	$scope.hashPassword = function()
	{
		$scope.hashed = hashCode($scope.pass);
	}
	
	$scope.makeGuess = function()
	{
			if ($scope.hashed === hashCode($scope.guess)) $scope.result = "correct";
			else $scope.result = "wrong";
	}
});

function hashCode(s) {
	var string = new String(s);
	var hash = 0, i, chr;
	if (string.length === 0) return hash;
	for (i = 0; i < string.length; i++) {
		chr   = string.charCodeAt(i);
		hash  = ((hash << 5) - hash) + chr;
		hash |= 0;
	}
	return hash;
};