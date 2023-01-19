const APIURL= 'https://api.thecatapi.com/v1/images/search?limit=3';

// async function reload(){
//     const res = await fetch(APIURL);
//     const data = await res.json();

        
// }

async function reload(){
    const res = await fetch(APIURL);
    const data = await res.json();
    for (let index = 0; index < data.length; index++) {
        let newImage = document.createElement("img");
        newImage.setAttribute('id','img'+index );
        newImage.setAttribute('width','300');
        newImage.src=data[index].url
        let parentDiv = document.getElementById("contenedor-fotos");
        parentDiv.appendChild(newImage);
    }        
}

reload()