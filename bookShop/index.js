import * as login from './login-page.js';

var routes = {
	'login': ()=>{
		console.log('login')
		login.init()
	}
}

function handleRouting() {
	console.log(location.hash.slice(1))
	if(location.hash.slice(1) in routes)
		routes[location.hash.slice(1)]()
	else {
		routes['login']()
	}
}

window.addEventListener('hashchange', handleRouting)
handleRouting();