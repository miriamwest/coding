// var request = new XMLHttpRequest();
// request.onreadystatechange = handleResponse;
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
// request.send();

// function handleResponse(){
// 	if(request.readyState == 4 && request.status == 200){
// 		console.log(request.response.text);
// 		console.log(JSON.parse(request.responseText));
// 	}else if(request.readyState == 4 && request.status != 200){
// 		console.log("error");
// 	}
// }


$("#all-posts").click(function(e){
	$.get("https://jsonplaceholder.typicode.com/posts", function(posts){
		posts.forEach(function(post){
			var li=$('<li></li>');
			li.text(post.title);
			$('#posts-list').append(li);
			
		})
	})
})