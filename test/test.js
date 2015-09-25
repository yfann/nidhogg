var app=angular.module('app',['dataService']).controller('appController',['$scope','bigDataSvc',
function($scope,bigDataSvc){
	$scope.name="test lang list";
	$scope.dataList=bigDataSvc.getLongList();
	
}]);



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
