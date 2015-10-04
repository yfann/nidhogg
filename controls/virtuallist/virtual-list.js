commonModule.directive('virtualList',['$log',function($log){
	return{
		restrict:"E",
		templateUrl:"/controls/virtuallist/virtual-list.html",
		scope:{
			list:'='
		},
		link:function(scope,element,attr){
			scope.rowHeight=20;
			scope.listHeight=800;
			scope.scrollTop=0;
			scope.recordsPerPage=0;
			scope.countOfVertual=0;
			scope.canvasHeight={};
			scope.visibleList=[];
			
			scope.init=function(){
				angular.element(element[0]).find('.vertualListContainer')[0].addEventListener('scroll',scope.onScroll);				
				scope.recordsPerPage=Math.round(scope.listHeight/scope.rowHeight);
				scope.countOfVertual=3*scope.recordsPerPage;
				scope.canvasHeight={
					height:scope.list.length*scope.rowHeight+'px'
				};
				$log.debug('recordsPerPage:'+scope.recordsPerPage);
				$log.debug('countOfVertual:'+scope.countOfVertual);
				$log.debug('canvasHeight:'+scope.canvasHeight.height);
				scope.updateDisplayList();
			};
			
			
			scope.updateDisplayList=function(){
		        var firstRecord=Math.max(Math.floor(scope.scrollTop/scope.rowHeight)-scope.recordsPerPage,0);
				$log.debug('firstRecord:'+firstRecord);
				scope.visibleList=scope.list.slice(firstRecord,firstRecord+scope.countOfVertual);
				for(var i=0;i<scope.visibleList.length;i++){
					scope.visibleList[i].styles={
						'top':((firstRecord+i)*scope.rowHeight)+'px'
					};
				}
			};
			
			
			scope.onScroll=function(){
				scope.scrollTop=angular.element(element[0]).find('.vertualListContainer').prop('scrollTop');
				$log.debug('scrolltop:'+scope.scrollTop);
				scope.updateDisplayList();
				scope.$apply();
			};
			
			scope.init();
		}
	};
}]);