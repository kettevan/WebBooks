export function init() {
    console.log(localStorage.getItem('user'))
    var content = document.querySelector('#body')
	fetch('main-page.html').then(function (response) {
        console.log(response)
		return response.text();
	}).then(function (html) {
        content.innerHTML = html;
        var contentForRender = document.getElementById('bookItems')
        render(contentForRender);
        listen(contentForRender)
	}); 
}


function importCss(name) {
    var head = document.getElementsByTagName('HEAD')[0]; // Create new link Element

    var link = document.createElement('link'); // set the attributes for link element

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.id = name + "_css";
    link.href = name + '.css'; // Append link element to HTML head

    head.appendChild(link);
  }

function detailsClick(e) {
   
    console.log(e.target.id)
    var id = e.target.id

    location.href = "#details?id=" + id
}

function listen(contentForRender) {
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

    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        let searchText = searchForm.search.value.trim()
        if (!searchText) {
            searchText = "";
        }
        console.log(searchText)
        const xhttp = new XMLHttpRequest();
        var url='https://localhost:5001/searchBook?searchText=' + searchText + "&byName=" + !checkbox.checked;
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
                            <p><button id="${bookInfo["id"]}">View Details</button></p>
                        </div>
                    </div>
                    `
                }).join('')
                contentForRender.innerHTML = `
                <div class="row">
                    ${component}
                </div>
                `;
                for (var index in ids) {
                    var bookId = ids[index]
                    const detailsButton = document.getElementById(bookId);
                    detailsButton.addEventListener("click", (e) => {
                        e.preventDefault();
                        detailsClick(e)
                    })
                }
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
        
    })
}

//<p><button onclick="detailsClick('${bookInfo["id"]}')">View Details</button></p>

function render(contentForRender) { 
    const xhttp = new XMLHttpRequest();
    var url='https://localhost:5001/books';
    var ids = []
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = xhttp.response
            var json = JSON.parse(response);
            let component = json.map((bookInfo) => { 
                ids.push(bookInfo["id"])
                var bookImagesrc = "./assets/images/bookImages/" + bookInfo["imageName"]
                // console.log(bookInfo["id"])
                return `
                <div class="column">
                    <div class="card">
                        <img src="${bookImagesrc}" style="width:100%">
                        <h3>${bookInfo["name"]}</h3>
                        <p class="price">$${bookInfo["price"]}</p>
                        <p><button id="${bookInfo["id"]}" value="${bookInfo["id"]}">View Details</button></p>
                    </div>
                </div>
                `
            }).join('')
            contentForRender.innerHTML = `
			<div class="row">
				${component}
			</div>
            `;
            
            for (var index in ids) {
                var bookId = ids[index]
                const detailsButton = document.getElementById(bookId);
                detailsButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    detailsClick(e)
                })
            }
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
    
}




