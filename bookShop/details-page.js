const addToCartButton = document.getElementById("addToCartButton");
const id = "b8611d76-7804-4a80-a776-d4780e4c4c53"
var content = document.querySelector('.row')
render(content)



function render(content) { 
    const xhttp = new XMLHttpRequest();
    var url='https://localhost:5001/books';
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = xhttp.response
            var bookInfo = JSON.parse(response);
            var bookImagesrc = "./assets/images/bookImages/" + bookInfo["imageName"]
            let component = 
                `
                <div class="column">
                    <div class="card">
                        <img src="${bookImagesrc}" style="width:100%">
                        <h3>${bookInfo["name"]}</h3>
                        <p class="price">$${bookInfo["price"]}</p>
                        <p><button onclick="detailsClick('${bookInfo["id"]}')">View Details</button></p>
                    </div>
                </div>
                `
            content.innerHTML = `
			<div class="row">
				${component}
			</div>
		    `;
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

addToCartButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("added")
});