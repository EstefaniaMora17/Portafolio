let uri="https://accounts.spotify.com/api/token";

let dato1="grant_type=client_credentials";
let dato2="client_id=dfaae124404a45739107dba8320a07b2";
let dato3="client_secret=56f861ff36a94d059a94466c7c16c6fb";

//objeto
let parametrosPOST={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    //``-->sirve para concatener sin isuar el +
    //todo los datos deben ser separados por &
    body:`${(dato1)}&${(dato2)}&${(dato3)}`
}
//fetch es una promesa
fetch(uri,parametrosPOST)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    obtenerToken(respuesta)
})
.catch(function(error){
    console.log(error)
})
function obtenerToken(respuesta){
    //respuesta es un objecto que tiene como atributo token_type
    let token=respuesta.token_type+" "+respuesta.access_token
    console.log(token)
    obtenerCanciones(token)
}

function obtenerCanciones(token){
    let uri="https://api.spotify.com/v1/artists/1To9XZOmBJgqfVfUCRK0OI/top-tracks?market=US";
        //todo objeto tiene llaves
    let parametrosEnvio={
        //atributo-valor
        method:"GET",
        headers:{
            Authorization:token
        }
    }
    fetch(uri,parametrosEnvio)
   
    //funcion anonima=que no tiene nombre, solo se ejecuta si la promesa se cumple
    .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(respuesta){
        console.log(respuesta);
        pintarDatos(respuesta);

    })
    .catch(function(error){
        console.log(error)
    })
  
    
}
function pintarDatos(datos){

    let fila=document.getElementById("fila")
    //arreglo
    datos.tracks.forEach(function(artista){
        console.log(artista.name);
        console.log(artista.preview_url);
        console.log(artista.album.images[0].url);
        console.log(artista.album.name);
        console.log(artista.album.release_date);
   

        //crear un div con js

        let columna=document.createElement("div");
        columna.classList.add("col");
        
        //crear div que sirve de tarjeta 
        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("W-100");

        //creo un img
        let imagen=document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=artista.album.images[0].url

        let audio=document.createElement("audio");
        audio.classList.add("w-100");
        audio.src = artista.preview_url;
        audio.setAttribute("controls","controls");


        let nombreCancion = document.createElement("p");
        nombreCancion.classList.add("texto");
        nombreCancion.textContent= artista.name;

        let popularidad = document.createElement("p");
        popularidad.classList.add("texto");
        popularidad.textContent = 'Popularidad: ' + artista.popularity;

        
      

       // popularidad.textContent = artista.popularity;

        //padres e hijos--> APPENDCHILD
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(audio);
        tarjeta.appendChild(nombreCancion);
        tarjeta.appendChild(popularidad);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
        
    })
    

    
}