const appSection = document.querySelector(".app")

fetch("https://basic-rest-flask.martinpedraza.repl.co/api/books")
	.then((response) => response.json())
    .then((livres) => {
        livres.forEach(livre => {
            appSection.innerHTML += `
            <div class="col">
                <article class="card">                
                    <img src="${livre.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${livre.title}</h5>
                        <button class="btn btn-dark">Edit</button>
                    </div>    
                </article>
            </div>
            `
        })
    })
