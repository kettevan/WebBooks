export function init() {
    var content = document.querySelector('#body')
	fetch('details-page.html').then(function (response) {
		return response.text();
	}).then(function (html) {
        content.innerHTML = html;
        var contentForRender = document.querySelector('#innerInfo')
        
        render(contentForRender);
        
	});
}

// 
// const id = "b8611d76-7804-4a80-a776-d4780e4c4c53"
// var content = document.querySelector('.row')
//render(content)


function listen() {
    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];
  
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    const addToCartButton = document.getElementById("addToCartButton");
    addToCartButton.addEventListener("click", (e) => {
        var url = document.URL
        console.log(localStorage.getItem('user'))
        var id = url.split('?')[1]
        console.log(id)
        e.preventDefault();
        const xhttp = new XMLHttpRequest();
        var url='https://localhost:5001/addCartItem?userId=' + localStorage.getItem('user') +'&'+id;
        console.log(url)
        xhttp.onreadystatechange = function() {
            console.log("aq")
            if (this.readyState == 4 && this.status == 200) {
                console.log("shemodis")
                var response = xhttp.response
                var bookInfo = JSON.parse(response);
                console.log(bookInfo)
                if (bookInfo) {
                    modal.style.display = "block";
                } else {
                    modal.style.display = "none";
                }
            }
        }
        xhttp.open("POST", url, true);
        xhttp.send();
});
}



function render(content) {
    var url = document.URL
    var id = url.split('?')[1]
    console.log(id)
    const xhttp = new XMLHttpRequest();
    var url='https://localhost:5001/getBookByID?' + id;
    console.log(url)
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = xhttp.response
            var bookInfo = JSON.parse(response);
            var bookImagesrc = "./assets/images/bookImages/" + bookInfo["imageName"]
            var releasedate = bookInfo["releaseDate"].split('T')[0]
            let component = 
                `
                <div class="column" id="imageCol">
                    <img src="${bookImagesrc}" style="width:50%" >
                </div>
                <div class="column">
                    <form>
                        <h1>${bookInfo["name"]}</h1>
                        <h2>Author: ${bookInfo["author"]["fullName"]} </h2>
                        <h2>Genre: ${bookInfo["category"]}</h2>
                        <h2>Release Date: ${releasedate} </h2>
                        <h2>Price: $${bookInfo["price"]}</h2>
                        <h2>Description:</h2>
                        <h3>
                        ${bookInfo["description"]}
                        </h3>
                        <h3 style="font-style: italic;">Rating: ${bookInfo["rating"]} </h3>
                        <p><button id="addToCartButton">Add To Cart</button></p>      
                    </form>
                </div>
                `
            content.innerHTML = `
			<div class="row">
				${component}
			</div>
            `;
            listen()
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

// addToCartButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("added")
// });