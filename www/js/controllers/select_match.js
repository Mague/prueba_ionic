angular.module("starter")
.controller('SelectMatchController', function($scope, $stateParams, $rootScope,$http) {
	vm = $scope
	vm.matches = []
	getData()

	function getData(){
		$http({
			url:'http://107.170.79.134/bttp-backend/backend-bttp/public/get/results?today=1&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMsImlzcyI6Imh0dHA6XC9cLzEwNy4xNzAuNzkuMTM0XC9idHRwLWJhY2tlbmRcL2JhY2tlbmQtYnR0cFwvcHVibGljXC9hcGlcL2xvZ2luIiwiaWF0IjoxNDc0NjMzNDY0LCJleHAiOjE0NzQ2MzUyNjQsIm5iZiI6MTQ3NDYzMzQ2NCwianRpIjoiNmIxZThmNmNkYWQ3OTM0ZTFjMzZiNDhhNzhhNDRlNzQifQ.DqQYQotZHABgpq1KpSdrZdjWd4xJ7z2-UdHzTtFBljM',
			method:'POST'
		}).then(function(data){
			if(data){
				console.log(data.data.matches)
				vm.matches = data.data.matches
			}
		},function(err){
			if(err){
				console.log(err)
			}
		})
	}
})
