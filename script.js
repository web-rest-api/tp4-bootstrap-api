const appSection = document.querySelector(".app")
const modalTitle = document.querySelector(".modal-title")

/*  app inisialilzation  */
const appInit = () => {
	fetchData(
		"https://basic-rest-flask.martinpedraza.repl.co/api/books",
		writeHtml
	)
}

/**
 * Fetches data from the specified URL and invokes the callback with the retrieved data.
 *
 * @param {string} url - The URL from which to fetch the data.
 * @param {(data: any) => void} callback - The callback function to be invoked with the retrieved data.
 * @throws {TypeError} Will throw an error if url is not a string or callback is not a function.
 */

const fetchData = (url, callback) => {
	fetch(url)
		.then((res) => {
			if (res.ok) {
				res.json().then((data) => {
					callback(data)
				})
			} else {
				appSection.innerHTML = `<h2 class='text-danger'>Error fetching data ...</h2>
                    <img src="./offline.gif" alt="offline" >
                    `
			}
		})
		.catch(
			(err) =>
				(appSection.innerHTML = `<h2 class='text-danger'>Error fetching data ...</h2>
                <p>${err}</p>
                    <img src="./offline.gif" alt="offline" >
                    `)
		)
}

/**
 * Writes HTML content for each book in the provided array and appends it to the appSection.
 *
 * @param {Array} livres - An array containing book objects.
 * @throws {TypeError} Will throw an error if livres is not an array.
 */
const writeHtml = (livres) => {
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
	handleClicks(editBtnArray)
}

/*  handle clicks  */
/**
 *
 * @param {NodeList|HTMLCollection|Array} btnsArray // nodes from the DOM
 */
const handleClicks = (btnsArray) => {
	btnsArray.forEach((btn) => {
		btn.addEventListener("click", () => {
			console.log("clicked edit")
		})
	})
}

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
