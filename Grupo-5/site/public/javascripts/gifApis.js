fetch("https://api.giphy.com/v1/gifs/search?api_key=8SJ2ZJZxzQikP5Za2fow63H96t1jovpd&q=thanks&limit=25&offset=0&rating=g&lang=en")
.then(function(responde) {
    return responde.json()
})
.then(function(informacion) {
    console.log(informacion);
    let url =  informacion.data[10].images.preview_gif.url;

    document.querySelector("#gifGraciasCompra").innerHTML += "<img src = "+ url + " >";
})
.catch(function(error) {
    console.log("Error: " + error);
})
