const titulo = document.getElementById("titulo")
const descripcion = document.getElementById("descripcion")
const categoria = document.getElementById("categoria")


function crearFormulario(evento){
    console.log(titulo.value,descripcion.value,categoria.value)
    let div = document.createElement("div")
    div.className = "col-12 d-flex w-75 m-auto mt-2 bg-dark flex-column"
    let title = document.createElement("p")
    title.className = "text-bg-dark px-2 my-auto"
    let category = document.createElement("p")
    category.className = "text-bg-dark px-2 my-auto"
    title.innerHTML = titulo.value
    category.innerHTML = categoria.value
    div.appendChild(title)
    div.appendChild(category)
    document.body.appendChild(div)
}
    