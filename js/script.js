
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
        let array = res.data
        callback(array)
    })
    .catch((err) => console.log(err));
};

function createCards(array){
    array.forEach(el => {
        console.log(el.url)
        cards.innerHTML +=
        `<div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card" id="${el.id}">
                    <img src="./img/pin.svg" class="position-absolute left-50 transform-trans-50 top-10px" alt="...">
                    <img src="${el.url}" class="card-img-top p-15 img-card" alt="...">
                <div class="card-body">
                    <p class="card-text">${el.title}</p>
                </div>
            </div>
        </div>`
    });
}
//chiamo una funzione passandogli una callaback per creare le cards con la risposta della chiamata axios 
let cardNum = 6;
axiosCall(createCards, cardNum);