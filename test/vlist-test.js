var app=angular.module('app',['app.common']).controller('appController',['$scope',
function($scope){
	$scope.name="test lang list";

	$scope.list=testData.getLongList();
}]);

var commonModule = angular.module('app.common', []);

//generate test data
function generateData(){
	var count=4000;
	var result='[';
	for(var i=0;i<=count;i++)
	{
		result+='{id:'+i+',name:\'test name'+i+'\'},<br>';
	}
	result+=']';
	console.log(result);
	$('#result').html(result);
	
}

$(
	function(){
		//generateData();
	}
);
