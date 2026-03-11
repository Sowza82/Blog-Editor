/* -------------------------
PEGAR ID
------------------------- */

const params = new URLSearchParams(window.location.search)
const id = params.get("id")


/* -------------------------
CARREGAR POSTS
------------------------- */

let posts = JSON.parse(localStorage.getItem("posts")) || []

const post = posts.find(p => p.id == id)


/* -------------------------
ELEMENTOS
------------------------- */

const titulo = document.getElementById("titulo")
const autor = document.getElementById("autor")
const categoria = document.getElementById("categoria")
const imagem = document.getElementById("imagem")
const conteudo = document.getElementById("conteudo")

const editarBtn = document.getElementById("editar")
const excluirBtn = document.getElementById("excluir")


/* -------------------------
SE NÃO EXISTIR
------------------------- */

if(!post){

document.body.innerHTML = `
<div style="text-align:center;margin-top:60px">
<h2>Post não encontrado</h2>
<a href="index.html">Voltar</a>
</div>
`

throw new Error("Post não encontrado")

}


/* -------------------------
RENDER POST
------------------------- */

titulo.innerText = post.titulo

autor.innerText = `Por ${post.autor || "Autor desconhecido"}`

if(post.data){
autor.innerText += ` • ${post.data}`
}

if(categoria){
categoria.innerText = post.categoria || "Blog"
}

if(imagem){
imagem.src = post.imagem || "https://picsum.photos/900/400"
}

if(typeof marked !== "undefined"){
conteudo.innerHTML = marked.parse(post.conteudo)
}else{
conteudo.innerText = post.conteudo
}


/* -------------------------
EDITAR
------------------------- */

if(editarBtn){

editarBtn.addEventListener("click", () => {

window.location.href = `editor.html?id=${post.id}`

})

}


/* -------------------------
EXCLUIR
------------------------- */

if(excluirBtn){

excluirBtn.addEventListener("click", () => {

const confirmar = confirm("Deseja excluir este post?")

if(!confirmar) return

posts = posts.filter(p => p.id != post.id)

localStorage.setItem(
"posts",
JSON.stringify(posts)
)

window.location.href = "index.html"

})

}
