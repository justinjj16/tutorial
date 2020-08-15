var button = document.getElementsByClassName("btn")[0];

console.log('Hi BIBIN');
	// es5
	button.addEventListener('click',function(){
		console.log("Clicked Button");
	});

	console.log(button)

	//es6   callback fuction 
	button.addEventListener('click',()=>{
		console.log('clicked');
	}); 

