/* -------------------------
ELEMENTOS
------------------------- */

const titulo = document.getElementById("titulo")
const autor = document.getElementById("autor")
const categoria = document.getElementById("categoria")
const novaCategoriaInput = document.getElementById("nova-categoria")
const addCategoriaBtn = document.getElementById("add-categoria")

const img = document.getElementById("img-url")
const conteudo = document.getElementById("conteudo")

const renderTitulo = document.getElementById("render-titulo")
const renderAutor = document.getElementById("render-autor")
const renderImg = document.getElementById("render-img")
const renderConteudo = document.getElementById("render-conteudo")

const publicar = document.getElementById("publicar")
const upload = document.getElementById("upload-img")


/* -------------------------
STORAGE
------------------------- */

let posts = JSON.parse(localStorage.getItem("posts")) || []

let categorias = JSON.parse(localStorage.getItem("categorias")) || [
"Tech",
"Programação",
"Carreira",
"Front-End"
]


/* -------------------------
CARREGAR CATEGORIAS
------------------------- */

function carregarCategorias(){

categoria.innerHTML = ""

categorias.forEach(cat => {

const option = document.createElement("option")

option.value = cat
option.textContent = cat

categoria.appendChild(option)

})

}

carregarCategorias()


/* -------------------------
ADICIONAR CATEGORIA
------------------------- */

if(addCategoriaBtn){

addCategoriaBtn.addEventListener("click", () => {

const nova = novaCategoriaInput.value.trim()

if(!nova){
alert("Digite uma categoria")
return
}

if(categorias.includes(nova)){
alert("Categoria já existe")
return
}

categorias.push(nova)

localStorage.setItem(
"categorias",
JSON.stringify(categorias)
)

carregarCategorias()

categoria.value = nova

novaCategoriaInput.value = ""

})

}


/* -------------------------
PEGAR ID
------------------------- */

const params = new URLSearchParams(window.location.search)
const editId = params.get("id")

let editingPost = null


/* -------------------------
PREVIEW
------------------------- */

function preview(){

renderTitulo.innerText = titulo.value || "Título do artigo"

renderAutor.innerText = autor.value
? `Por ${autor.value}`
: "Autor"

renderImg.src = img.value || "https://picsum.photos/800/400"

if(typeof marked !== "undefined"){

renderConteudo.innerHTML = marked.parse(
conteudo.value || "Conteúdo aparecerá aqui..."
)

}else{

renderConteudo.innerText = conteudo.value

}

}


/* -------------------------
EVENTOS
------------------------- */

titulo.addEventListener("input", preview)
autor.addEventListener("input", preview)
img.addEventListener("input", preview)
conteudo.addEventListener("input", preview)


/* -------------------------
UPLOAD IMAGEM
------------------------- */

if(upload){

upload.addEventListener("change", (e)=>{

const file = e.target.files[0]

if(!file) return

const reader = new FileReader()

reader.onload = function(event){

img.value = event.target.result
preview()

}

reader.readAsDataURL(file)

})

}


/* -------------------------
MODO EDIÇÃO
------------------------- */

if(editId){

editingPost = posts.find(post => post.id == editId)

if(editingPost){

titulo.value = editingPost.titulo
autor.value = editingPost.autor
img.value = editingPost.imagem
conteudo.value = editingPost.conteudo

carregarCategorias()

categoria.value = editingPost.categoria

publicar.innerText = "Salvar alterações"

preview()

}

}


/* -------------------------
SALVAR
------------------------- */

publicar.addEventListener("click", (e)=>{

e.preventDefault()

if(!titulo.value.trim() || !conteudo.value.trim()){

alert("Preencha título e conteúdo")

return

}

if(editingPost){

editingPost.titulo = titulo.value
editingPost.autor = autor.value || "Autor desconhecido"
editingPost.categoria = categoria.value
editingPost.imagem = img.value
editingPost.conteudo = conteudo.value

}

else{

const newPost = {

id: Date.now(),

titulo: titulo.value,

autor: autor.value || "Autor desconhecido",

categoria: categoria.value,

imagem: img.value,

conteudo: conteudo.value,

data: new Date().toLocaleDateString("pt-BR")

}

posts.push(newPost)

}

localStorage.setItem(
"posts",
JSON.stringify(posts)
)

window.location.href = "index.html"

})


preview()
