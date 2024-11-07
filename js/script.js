
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
        cards.innerHTML +=
        `<div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card" id="${el.id}">
                    <img src="./img/pin.svg" class="position-absolute left-50 transform-trans-50 top-10px" alt="...">
                    <img src="${el.url}" onclick="seeOverlay('${el.url}')" class="card-img-top p-15 img-card" id="photo" alt="...">
                <div class="card-body">
                    <p class="card-text">${el.title}</p>
                </div>
            </div>
        </div>`
    });
}



function seeOverlay(url){

    const app = document.getElementById("img-overlay");
    overlay.style.display = "block";
    app.src = url; 

    overlay.addEventListener("click", (event)=>{
        overlay.style.display = "none";
    })

}

//chiamo una funzione passandogli una callaback per creare le cards con la risposta della chiamata axios 
let cardNum = 6;
let array= [];
let overlay = document.getElementById("overlay")
axiosCall(createCards, cardNum);