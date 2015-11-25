var app = angular.module('currentYear', []);

app.controller('CurCtrl', function($scope, $location){
	$scope.currentYear = new Date().getFullYear();
	$scope.changing = true;
	
	$scope.$watch('changing', function(newValue){
		if(!newValue){
		 	window.setTimeout(function () { 
				document.getElementById('edit').focus(); 
			}, 0); 
		}
	});
	$scope.$watch('transgression', function(newValue){
		$scope.setSearch();
	});
	
	$scope.setSearch = function(){
		$location.search('t', $scope.transgression);
	};
	
	var checkT = function(){	
		if ($location.search().t){
			$scope.transgression = $location.search().t;
		} else {
			$scope.transgression = '';
		}
	};
	
	checkT();
});