
function axiosCall(callback, n){ //creo una funzione chiamata axiosCall che riceve come parametro una callback e una variabile
    const staticUrl = "https://jsonplaceholder.typicode.com/"; //inizzializzo una var con l'url statico del api
    let url_body = 'photos' //inizzializzo una var con il corpo dell'api
    let  endpoint = staticUrl+ url_body; //inizzializzo una var con l'unione delle due variabili sopra dichiarate

    axios //procedo con la chiamata axios
    .get(endpoint, { //chimata all'api 
		params: { // i params sono i parametri che vengono mandati assieme  alla request
			_limit: n, //devono essere oggetti semplici o oggetti URLSearchParams, se dovessero essere nulli o undifined non vengono inviati
		},
	})
    .then((res) => { // se la richiesta è andata a buon fine e sono libero per eseguire il codice andremo nel then 
        const result = res.data // attribuisco alla var result i valori ricevuti dalla risposta (array di oggetti)
        callback(result) //richiamo la funzione che ho passato come parametro e gli passo il risultato della chiamata
    })
    .catch((err) => {
        console.log(err)
    }) //se ci fossero nella chiamata degli errori mando in console il tipo di errore
}

function createCards(array){ //creo una funzione per creare le card e le passo un array
    array.map(el => { //itero nell'array tramite un for each, per ogni elemento
        cards.innerHTML += //prendo l'elemento con id cards e vado a scrivere del codice html dentro grazie al template literal
        `<div class="col-sm-12 col-md-6 col-lg-4">  
                <div class="card" id="${el.id}" data-onclick-image="${el.url}">
                    <img src="./img/pin.svg" class="position-absolute left-50 transform-trans-50 top-10px" alt="...">
                    <img src="${el.thumbnailUrl}" class="card-img-top p-15 img-card" alt="...">
                <div class="card-body">
                    <p class="card-text">${el.title}</p>
                </div>
            </div>
        </div>`
    });
    addListener() //finito il ciclo invoco la funzione add listener
}

function addListener(){
    let els = document.querySelectorAll(".card"); //mi recupero tutti gli elementi con class card-img-top ottenendo una nodeList
    els.forEach((el)=>{ //per ogni elemento della nmodelist 
        el.addEventListener("click", function(event) { //aggiungo un eventListener che al click mi invoca la funzione seeOverlay passandogli come parametro il valore dell';attributo data-onclick-image 
            seeOverlay(el.getAttribute('data-onclick-image'))
        })
    })
}
function seeOverlay(url){

    const app = document.getElementById("img-overlay"); //prendo l'elemento con id img-overlay
    overlay.style.display = "block"; // imposto display block per l'elemento con id overlay per visualizzarlo
    app.src = url;  //imposto l'src dell'elemento app con il valore passato come parametro

    overlay.addEventListener("click", (event)=>{  //aggiungo una funzione che al click dello schermo mi fa sparire l'overlay
        overlay.style.display = "none";
    })

}

//chiamo una funzione passandogli una callaback per creare le cards con la risposta della chiamata axios 
let cardNum = 6; //imposto una variabile che usero per dare il limite delle card
// let result; //dichiaro una var dove andro ad inserire il result della richiesta
let overlay = document.getElementById("overlay") //recupero l'elemento overlay che mi servira in futuro
axiosCall(createCards, cardNum); //chiamo la funzione passando la dichiarazione della funzione e la variabile che imposta il limit
