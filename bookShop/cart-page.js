export function init() {
    console.log(localStorage.getItem('user'))
    var content = document.querySelector('#body')
	fetch('cart-page.html').then(function (response) {
        console.log(response)
		return response.text();
	}).then(function (html) {
        content.innerHTML = html;
        var contentForRender = document.getElementById('bookItems')
        render(contentForRender);
        //listen(contentForRender)
	}); 
}

function detailsClick(e) {
   
    console.log(e.target.id)
    var id = e.target.id

    location.href = "#details?id=" + id
}


//<p><button onclick="detailsClick('${bookInfo["id"]}')">View Details</button></p>

function render(contentForRender) { 
    const xhttp = new XMLHttpRequest();
    var url='https://localhost:5001/getUserBooks?userId=' + localStorage.getItem('user');
    var ids = []
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = xhttp.response
            var json = JSON.parse(response);
            let component = json.map((bookInfo) => { 
                ids.push(bookInfo["id"])
                var bookImagesrc = "./assets/images/bookImages/" + bookInfo["imageName"]
                return `
                <div class="column">
                    <div class="card">
                        <img src="${bookImagesrc}" style="width:100%">
                        <h3>${bookInfo["name"]}</h3>
                        <p class="price">$${bookInfo["price"]}</p>
                        <p><button></button></p>
                    </div>
                </div>
                `
            }).join('')
            contentForRender.innerHTML = `
			<div class="row">
				${component}
			</div>
            `;
            
            
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
    
}




