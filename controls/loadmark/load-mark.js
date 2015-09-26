commonModule.directive('loadMark',['$log',function($log){
	return{
		restrict:"A",
		link:function(scope,element,attr){
			$log.debug('loaded');
		}
	};
}]);