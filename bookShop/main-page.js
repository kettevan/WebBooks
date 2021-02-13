var content = document.querySelector('#bookItems')
render(content);
const searchButton = document.getElementById("searchSubmitButton");
const searchForm = document.getElementById("searchForm");
const checkbox = document.querySelector("input[name=author]");

checkbox.addEventListener('change', function() {
    let searchInput = document.getElementById("searchInput");
    if (this.checked) {
      searchInput.placeholder = "Search by author.."
    } else {
      searchInput.placeholder = "Search by name.."
    }
  });


function render(content) { 
    const xhttp = new XMLHttpRequest();
    var url='https://localhost:5001/books';
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = xhttp.response
            var json = JSON.parse(response);
            let component = json.map((bookInfo) => { 
                var bookImagesrc = "./assets/images/bookImages/" + bookInfo["imageName"]
                return `
                <div class="column">
                    <div class="card">
                        <img src="${bookImagesrc}" style="width:100%">
                        <h3>${bookInfo["name"]}</h3>
                        <p class="price">$${bookInfo["price"]}</p>
                        <p><button onclick="detailsClick('${bookInfo["id"]}')">View Details</button></p>
                    </div>
                </div>
                `
            }).join('')
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

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let searchText = searchForm.search.value.trim()
    if (!searchText) {
        searchText = "";
    }
    console.log(searchText)
    const xhttp = new XMLHttpRequest();
    var url='https://localhost:5001/searchBook?searchText=' + searchText + "&byName=" + !checkbox.checked;
    console.log(url)
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = xhttp.response
            var json = JSON.parse(response);
            let component = json.map((bookInfo) => { 
                var bookImagesrc = "./assets/images/bookImages/" + bookInfo["imageName"]
                return `
                <div class="column">
                    <div class="card">
                        <img src="${bookImagesrc}" style="width:100%">
                        <h3>${bookInfo["name"]}</h3>
                        <p class="price">$${bookInfo["price"]}</p>
                        <p><button onclick="detailsClick('${bookInfo["id"]}')">View Details</button></p>
                    </div>
                </div>
                `
            }).join('')
            content.innerHTML = `
			<div class="row">
				${component}
			</div>
		    `;
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
})


function detailsClick(id) {
    console.log("hellooo")
    console.log(id)
}