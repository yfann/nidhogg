var app=angular.module('app',['dataService','app.common']).controller('appController',['$scope','bigDataSvc',
function($scope,bigDataSvc){
	$scope.name="test lang list";
	$scope.dataList=bigDataSvc.getLongList();
	
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
