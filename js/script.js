
function axiosCall( n){
    const staticUrl = "https://jsonplaceholder.typicode.com/";
    let url_body = 'photos'
    let  endpoint = staticUrl+ url_body;

    axios
    .get(endpoint, {
		params: {
			_limit: n,
		},
	})
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err) => console.log(err));
}
let literal = `<div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <img src="./img/pin.svg" class="position-absolute left-50 transform-trans-50 top-10px" alt="...">
                        <img src="..." class="card-img-top p-15 img-card" alt="...">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>`

//chiamo una funzione passandogli una callaback per creare le cards con la risposta della chiamata axios 
let cardNum = 6;
axiosCall( cardNum);