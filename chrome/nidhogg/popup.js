console.log('popup loaded');
var app=angular.module('myApp',[]);
app.controller('appController',function($scope, $timeout){
	var splitChar='x';
	
	var ss=function(key,val){
		if(arguments.length===2)
		{
			localStorage[key]=val;
		}
		return localStorage[key];
	};
	
	var saveImage=function(){
		if(!$scope.isEditImgButton)
		{
			ss("nidhogg_minWidth",$scope.minWidth);
			ss("nidhogg_minHeight",$scope.minHeight);
			console.log($scope.minWidth+' '+$scope.minHeight);
			chrome.tabs.getSelected(null,function(tab){
				chrome.tabs.sendMessage(tab.id,{actionType:'saveImage',minWidth:$scope.minWidth,minHeight:$scope.minHeight},function(response){
					console.log(response.srcs);
					
					angular.forEach(response.srcs,function(data,index,array){
						$scope.download(data);
					});
				});
			});
		}

	};
	
	var download=function(url){
		chrome.downloads.download({url:url});
	};
	
	var finishEdit=function(){
		$scope.isEditImgButton=false;
	};
	
	var changeImgButtonInput=function(){
		var inputs=$scope.imgButtonInput.split(splitChar);
		$scope.minWidth=ss("nidhogg_minWidth",inputs[0]?inputs[0]:0);
		$scope.minHeight=ss("nidhogg_minHeight",inputs[1]?inputs[1]:0);
		$scope.imgButtonText=$scope.minWidth+' × '+$scope.minHeight;
	};
	
	var editImgButton=function(){
		$scope.isEditImgButton=!$scope.isEditImgButton;
		if($scope.isEditImgButton)
		{
			 $timeout(function(){
				 $('#imgBtnInput').focus().select();
			 },10);
			
		}
	};
	
	(function init(){
		if(ss("nidhogg_minWidth") && ss("nidhogg_minWidth")!='undefined')
		{
			$scope.minWidth=ss("nidhogg_minWidth");
		}
		else{
			$scope.minWidth=0;
		}
		if(ss("nidhogg_minHeight")&&ss("nidhogg_minHeight")!='undefined')
		{
			$scope.minHeight=ss("nidhogg_minHeight");
		}
		else{
			$scope.minHeight=0;
		}

		$scope.imgButtonText=$scope.minWidth+' × '+$scope.minHeight;
		$scope.imgButtonInput=$scope.minWidth+splitChar+$scope.minHeight;
		$scope.isEditImgButton=false;
		$scope.showEdit=false;
		
		$scope.saveImage=saveImage;
		$scope.download=download;
		$scope.changeImgButtonInput=changeImgButtonInput;
		$scope.finishEdit=finishEdit;
		$scope.editImgButton=editImgButton;
		
	})();
});


