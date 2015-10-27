console.log("nidhogg loaded 2");


function imgFilter(minWidth,minHeight){
	var srcs=[];
	minWidth=minWidth?minWidth:0;
	minHeight=minHeight?minHeight:0;
	$('img').each(function(index,element){
		if(this.width>=minWidth && this.height>=minHeight)
		{
		    srcs.push(this['src']);	
		}
	});
	return srcs;
}

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	if(request.actionType=="saveImage")
	{
		console.log('content:'+request.minWidth+' '+request.minHeight);
		var srcs=imgFilter(request.minWidth,request.minHeight);
		sendResponse({srcs:srcs});
	}
});