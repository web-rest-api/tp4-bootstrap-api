const appSection = document.querySelector(".app")

/*  app inisialilzation  */
const appInit = () => {
	fetchData("https://basic-rest-flask.martinpedraza.repl.co/api/boks")
}

/* fetch data   */
const fetchData = (url) => {
	fetch(url)
		.then((res) => {
			if (res.ok) {
			} else {
				appSection.innerHTML =
					"<h2 class='text-danger'>Error fetching data ...</h2>"
			}
		})
		.catch(
			(err) =>
				(appSection.innerHTML =
					"<h2 class='text-danger'>Error fetching data ...</h2>")
		)
}

/*  write html  */

/*  handle clicks  */

appInit()

/*
fetch("https://basic-rest-flask.martinpedraza.repl.co/api/books")
	.then((response) => response.json())
	.then((livres) => {
		livres.forEach((livre) => {
			appSection.innerHTML += `
            <div class="col">
                <article class="card">                
                    <img src="${livre.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${livre.title}</h5>
                        <button data-bs-toggle="modal"
			                    data-bs-target="#bookModal" 
                                class="btn btn-dark edit">Edit</button>
                    </div>    
                </article>
            </div>
            `
		})
		const editBtnArray = document.querySelectorAll(".edit")
		console.log(editBtnArray, "select btns ...")
	})
    */
