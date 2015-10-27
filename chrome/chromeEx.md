##概念
这些页面可以相互访问在同一个线程上
###chrome://extensions
###浏览器按钮
###页面按钮(只和某个页面相关的功能)
###后台页面
+ 常住后台页面(始终打开)
+ 事件页面(需要时打开)
###内容脚本(与当前访问的页面交互)
注入浏览页面的方式：
+ 总是注入的(在manifest中的content_scripts配置)
+ 条件注入(executeScript(),insertCSS()需要cross-origin和chrome.tabs权限)   

执行环境：    
isolated world,内容脚本可以访问注入页面的DOM，不能访问js变量和函数，不会脚本冲突。  
  
通信：    
通过共享dom来和当前页通信，通过chrome.extension.connect()和扩展脚本通信  
chrome.extension.sendRequest()//内容页到扩展
chrome.tabs.sendRequest()//扩展到内容页
chrome.extension.onRequest

chrome.extension.connect()//建立长连接从内容脚本到扩展
chrome.tabs.connect()

引用扩展中的文件：

		var imgURL = chrome.extension.getURL("images/myimage.png");
		document.getElementById("someImage").src = imgURL;



	
##manifest.json

