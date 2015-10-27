console.log('popup loaded');
var app=angular.module('myApp',[]);
app.controller('appController',function($scope){
	$scope.saveImage=function(){
		localStorage["nidhogg_minWidth"]=$scope.minWidth;
		localStorage["nidhogg_minHeight"]=$scope.minHeight;
		console.log($scope.minWidth+' '+$scope.minHeight);
		chrome.tabs.getSelected(null,function(tab){
			chrome.tabs.sendMessage(tab.id,{actionType:'saveImage',minWidth:$scope.minWidth,minHeight:$scope.minHeight},function(response){
				console.log(response.srcs);
				
				angular.forEach(response.srcs,function(data,index,array){
					$scope.download(data);
				});
			});
		});
	};
	
	$scope.download=function(url){
		chrome.downloads.download({url:url});
	};
	
	(function init(){
		$scope.minWidth=localStorage["nidhogg_minWidth"];
		$scope.minHeight=localStorage["nidhogg_minHeight"];
	})();
});


