var Container =document.getElementById("Menus")
var button =document.getElementById("Boton").addEventListener("click",getpos)

function getpos()
{
    var Numeros = document.getElementById("Numerito").value;
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
    return res.json();
})
.then((post)=>
{
    Container.innerHTML= `<div class="Container">ID </div>
                         <div class="Container">Name</div>
                        <div class="Imagen">Image</div>`
    for (let index=0; index<Numeros;index++)(
        Container.innerHTML += `
                                <hr>
                                <div class="Container_id"> ${post[index].id}></div>
                                <div class="Title_name"> ${post[index].title}></div>
                                <img class="Images_color" src="${post[index].thumbnailUrl}"></div>
                                
        `    )
}) 
}
