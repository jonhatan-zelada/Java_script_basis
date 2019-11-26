var contenido = document.querySelector('#contenido');
//another way to write the same
//let contenido = document.getElementById('#contenido');


function traer(){
//fetch('texto.txt')
fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res=>res.json())
 .then(data=>{

    for (let i of data){
        console.log(data.[i].title) 
          

    }
      
        // contenido.innerHTML = `
        // <img src="${data.results["0"].picture.large} " width="100px" >
        // <p> NOmbre: ${data.results["0"].name.first} </p>
        // `
 })
//class="img-fluid round"


}