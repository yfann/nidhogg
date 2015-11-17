var MovieList=React.createClass({
	getInitialState:function(){
		return {mvlist:[]};
	},
	loadMovies:function(){
		$.ajax({
			type:"get",
			async:false,
			url:'http://api.douban.com/v2/movie/in_theaters',
			dataType:'jsonp',
			cache:false,
			success:function(data){
				if(data)
				{
					this.setState({mvlist:data.subjects});
				}
			}.bind(this),
			error:function(xhr,status,err){}
		});
		
		// $.getJSON("http://api.douban.com/v2/movie/in_theaters",function(data){
		// 		if(data)
		// 		{
		// 			this.setState({mvlist:data.subjects});
		// 		}
		// 	});
		
		console.log("data loaded");
	},
	componentDidMount:function(){
		this.loadMovies();
		
		console.log("componentDidMount");
	},
	render:function(){
		var movieNodes=this.state.mvlist.map(function(movie){
			return (<li>{movie.title}</li>);
		});
		
		return (<ul>{movieNodes}</ul>);
	}
});

React.render(
	<MovieList />,
	document.getElementById('example')
);