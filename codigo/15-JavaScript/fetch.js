var contenido = document.querySelector('#contenido');
//another way to write the same
//let contenido = document.getElementById('#contenido');


function traer(){
//fetch('texto.txt')
fetch('https://randomuser.me/api')
 .then(res=>res.json())
 .then(data=>{
        console.log(data.results["0".email]) //this is a promise
        //contenido.innerHTML=`${data}`
          
        contenido.innerHTML = `
        <img src="${data.results["0"].picture.large} " width="100px" >
        <p> NOmbre: ${data.results["0"].name.first} </p>
        `
 })
//class="img-fluid round"


}