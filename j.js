var forma = document.getElementById('form-wrapper');
var signIn = document.getElementById('sign-in');

var addTask = document.getElementById('add-task-button');

var login = document.getElementById('login');
var password = document.getElementById('password');



var str = '						\
{								\
    "login": "",			\
    "password": "",		\
    "id": 1						\
}								\
';

var outstr = JSON.parse(str);


addTask.onclick = function(){
	
}

signIn.onclick = function(){
	var log = login.value;
	var pas = password.value;

	if(outstr.login==log && outstr.password==pas){
		forma.style.display = "none";
		login.value = "";	
		password.value = "";
	}else{
		login.style.borderColor = "darkred";
	}
	
}

