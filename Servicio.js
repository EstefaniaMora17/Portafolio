//Cliente (voy para el restaurante )
//restaurante = Servidor Spotify
let uri="https://api.spotify.com/v1/artists/1To9XZOmBJgqfVfUCRK0OI/top-tracks?market=US";

let token=" Bearer BQCPZZ6Nl8h93Xrk4E46wKKDcs5UOx59OjxgVQL5F3X-Y3WuSy_ZqaEi34I3vDYiUA_ByVuPdlGV4bzIhoFcf7U4GNi2l9uFzmserUIO9iz2XPvpfMphGJ8sp52402lOrrqfvYNILOsGJt4yRlh4PCiQe0xgFLc";
//objectos
let parametrosEnvio={
    //atributo-valor
    method:"GET",
    headers:{
        Authorization:token
    }
}
//ir al servidor
fetch(uri,parametrosEnvio)
//entonces
//funcion anonima=que no tiene nombre, solo se ejecuta si la promesa se cumple
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    pintarDatos(respuesta)
   /*console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
    console.log(respuesta.tracks[0].album.images)
    console.log(respuesta.tracks[0].album.images[0])
    console.log(respuesta.tracks[0].album.images[0].url)*/
   
})
.catch(function(error){
    console.log(error)
})
function pintarDatos(datos){

    let fila=document.getElementById("fila")
    //arreglo
    datos.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //crear un div con js

        let columna=document.createElement("div")
        columna.classList.add("col")
        
        //crear div que sirve de tarjeta 
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("w-100")

        //creo un img
        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.src=cancion.album.images[0].url

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.src = cancion.preview_url;
        audio.setAttribute("controls","controls")


        //padres e hijos--> APPENDCHILD
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}