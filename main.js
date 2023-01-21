const APIURL= 'https://api.thecatapi.com/v1/images/search?limit=5&api_key=live_YMkUBSnLaMUgzyaE87K1nUeQAZCrLU6qou6YJ8c7bfTuJVrq5N0ZxxXc5tx0k2C3';
const API_URL_FAVOURITES= 'https://api.thecatapi.com/v1/favourites';
const API_URL_FAVOURITES_DELETE= (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=live_YMkUBSnLaMUgzyaE87K1nUeQAZCrLU6qou6YJ8c7bfTuJVrq5N0ZxxXc5tx0k2C3`;


async function imagenes(){
    const res = await fetch(APIURL);
    const data = await res.json();
    
    for (let index = 0; index < data.length; index++) {
        id= data[index].id
        let newImage = document.createElement("img");
        let newButton = document.createElement("button");
        newButton.innerHTML = 'Agregar a favoritos'
        newButton.setAttribute('id', 'button'+index)
        newButton.setAttribute('onclick', 'guardarMichisFavoritos(' +'"'+ id + '"' +')' );
        newImage.setAttribute('id','img'+index );
        newImage.setAttribute('width','300');
        newImage.src=data[index].url
        let contenedor = document.getElementById("contenedor-fotos");
        
        contenedor.appendChild(newImage);
        contenedor.appendChild(newButton);
        console.log(data)
    }        
}

async function imagenesFavoritas(){
    const res = await fetch(API_URL_FAVOURITES,{
        method:'GET',
        headers:{
        'X-API-KEY':'live_YMkUBSnLaMUgzyaE87K1nUeQAZCrLU6qou6YJ8c7bfTuJVrq5N0ZxxXc5tx0k2C3',
        }
    });
    const data = await res.json();
    console.log(data)
    for (let index = 0; index < data.length; index++) {
        id=data[index].id
        let newImage = document.createElement("img");
        let newButton = document.createElement("button");
        newButton.innerHTML = 'Quitar de favoritos'
        newImage.setAttribute('id','imgF'+index );
        newButton.setAttribute('onclick', 'deleteMichisFavoritos(' +'"'+ id + '"' +')' );
        newImage.setAttribute('width','300');
        newImage.src=data[index].image.url
        let contenedor = document.getElementById("michisFavoritos");
        contenedor.appendChild(newImage);      
        contenedor.appendChild(newButton);
    }


}

async function guardarMichisFavoritos(id){
    
    const res = await fetch(API_URL_FAVOURITES,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-API-KEY':'live_YMkUBSnLaMUgzyaE87K1nUeQAZCrLU6qou6YJ8c7bfTuJVrq5N0ZxxXc5tx0k2C3',
        },
        body: JSON.stringify({
            image_id: id
        })
    });
    console.log(res)
}

async function deleteMichisFavoritos(id){
    const res =await fetch(API_URL_FAVOURITES_DELETE(id),{
        method:'DELETE',
    })
}


imagenesFavoritas()
imagenes()
