let searchForm= document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
	searchForm.classList.toggle('active');
	navbar.classList.remove('active');
	
}

window.onscroll= () =>{
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
}
 let themeBtn = document.querySelector('#theme-btn');
themeBtn.onclick= () =>{
	themeBtn.classList.toggle('fa-sun');
	
	if(themeBtn.classList.contains('fa-sun')){
		document.body.classList.add('active');
	}else{
		documnet.body.classList.remove('active');
	}
	
 }
 