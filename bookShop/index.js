import * as login from './login-page.js';
import * as regisrtation from './registration-page.js';
import * as main from './main-page.js';
import * as details from './details-page.js'
import * as cart from './cart-page.js'

var routes = {
	'login': ()=>{
		console.log('login')
		login.init()
	},
	'registration': ()=> {
		console.log('register')
		regisrtation.init();
	},
	'main': ()=> {
		console.log('main')
		main.init()
	},
	'details:id': ()=> {
		console.log('details_id')
		details.init()
	},
	'cart': ()=> {
		console.log('cart')
		cart.init()
	}
}

function handleRouting() {
	console.log(location.hash.slice(1))
	var url = location.hash.slice(1)
	if(location.hash.slice(1) in routes)
		routes[location.hash.slice(1)]()
	else if (url.split('?')[0] === "details"){
		routes['details:id']()
	} else {
		routes['login']()
	}
}

window.addEventListener('hashchange', handleRouting)
handleRouting();