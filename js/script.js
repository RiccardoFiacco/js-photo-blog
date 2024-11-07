
function axiosCall(callback, n){
    const staticUrl = "https://jsonplaceholder.typicode.com/";
    let url_body = 'photos'
    let  endpoint = staticUrl+ url_body;

    axios
    .get(endpoint, {
		params: {
			_limit: n,
		},
	})
    .then((res) => {
        array = res.data
        callback(array)
    })
    .catch((err) => console.log(err));
};

function createCards(array){
    array.forEach(el => {
        // let app = [el.id, el.url]
        // console.log(app)
        cards.innerHTML +=
        `<div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card" id="${el.id}">
                    <img src="./img/pin.svg" class="position-absolute left-50 transform-trans-50 top-10px" alt="...">
                    <img src="${el.url}" onclick="seeOverlay(${el.id},'${el.url}')" class="card-img-top p-15 img-card" id="photo" alt="...">
                <div class="card-body">
                    <p class="card-text">${el.title}</p>
                </div>
            </div>
        </div>`
    });
}

function seeOverlay(id, url){
    console.log(id, url)
    const app = document.getElementById(id);
    app.addEventListener("click", (event)=>{
        event.preventDefault();    
        overlay.style.display = "block";
        app.src = url; 
    })

    closeOverlay.addEventListener("click", (event)=>{
        event.preventDefault();
        overlay.style.display = "none";
    })
}

//chiamo una funzione passandogli una callaback per creare le cards con la risposta della chiamata axios 
let cardNum = 6;
let array= [];
let overlay = document.getElementById("overlay")
axiosCall(createCards, cardNum);