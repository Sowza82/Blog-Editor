/* -------------------------
ELEMENTOS
------------------------- */

const container = document.getElementById("posts-container")
const search = document.getElementById("search")
const emptyState = document.getElementById("empty-posts")

let posts = JSON.parse(localStorage.getItem("posts")) || []


/* -------------------------
RESUMO
------------------------- */

function resumo(texto){

if(!texto) return ""

return texto
.replace(/[#_*`]/g,"")
.substring(0,120)
.trim() + "..."

}


/* -------------------------
RENDER POSTS
------------------------- */

function renderPosts(lista){

if(!container) return

container.innerHTML = ""

if(lista.length === 0){

container.style.display = "none"

if(emptyState){
emptyState.style.display = "block"
}

return
}

container.style.display = "grid"

if(emptyState){
emptyState.style.display = "none"
}

lista.forEach(post => {

const imagem = post.imagem || "https://picsum.photos/400/250"

const card = document.createElement("article")

card.classList.add("post-card")

card.innerHTML = `

<img src="${imagem}" alt="${post.titulo}">

<div class="post-card-content">

<span class="badge">
${post.categoria || "Blog"}
</span>

<h2>${post.titulo}</h2>

<p>${resumo(post.conteudo)}</p>

<div class="card-buttons">

<a href="post.html?id=${post.id}" class="btn btn-read">
Ler
</a>

<a href="editor.html?id=${post.id}" class="btn btn-edit">
Editar
</a>

<button data-id="${post.id}" class="btn btn-delete">
Excluir
</button>

</div>

</div>
`

container.appendChild(card)

})


/* BOTÃO EXCLUIR */

document.querySelectorAll(".btn-delete").forEach(btn => {

btn.addEventListener("click", () => {

const id = Number(btn.dataset.id)

excluirPost(id)

})

})

}


/* -------------------------
EXCLUIR POST
------------------------- */

function excluirPost(id){

const confirmar = confirm("Deseja excluir este post?")

if(!confirmar) return

posts = posts.filter(p => p.id !== id)

localStorage.setItem(
"posts",
JSON.stringify(posts)
)

renderPosts(posts)

}


/* -------------------------
BUSCA
------------------------- */

if(search){

search.addEventListener("input", () => {

const termo = search.value.toLowerCase().trim()

if(!termo){
renderPosts(posts)
return
}

const filtrados = posts.filter(post => {

const titulo = post.titulo?.toLowerCase() || ""
const conteudo = post.conteudo?.toLowerCase() || ""
const categoria = post.categoria?.toLowerCase() || ""

return (
titulo.includes(termo) ||
conteudo.includes(termo) ||
categoria.includes(termo)
)

})

renderPosts(filtrados)

})

}


/* -------------------------
INICIAR
------------------------- */

renderPosts(posts)
