# 📝 Blog Editor — Sowzatech

Aplicação web desenvolvida para **criação, edição e gerenciamento de artigos**, simulando o funcionamento de um sistema de blog diretamente no navegador.

O projeto foi construído utilizando **HTML, CSS e JavaScript puro**, com persistência de dados via **LocalStorage**, permitindo que os posts sejam armazenados no próprio navegador do usuário.

---

# 🚀 Sobre o projeto

O **Blog Editor** é uma aplicação front-end que simula um pequeno **CMS (Content Management System)**.

Com ele é possível:

- Criar novos artigos
- Editar posts existentes
- Excluir posts
- Buscar artigos
- Organizar conteúdos por categoria
- Visualizar os posts em uma página individual
- Visualizar preview do conteúdo em tempo real

Tudo isso sem backend, utilizando apenas recursos do navegador.

---

# ⚙️ Funcionalidades

✔️ Criar artigos  
✔️ Editar artigos  
✔️ Excluir artigos  
✔️ Sistema de busca de posts  
✔️ Criação dinâmica de categorias  
✔️ Preview do artigo em tempo real  
✔️ Upload de imagem  
✔️ Renderização de conteúdo em Markdown  
✔️ Armazenamento no navegador usando **LocalStorage**

---

# 🏗️ Estrutura do projeto

# 📝 Blog Editor — Sowzatech

Aplicação web desenvolvida para **criação, edição e gerenciamento de artigos**, simulando o funcionamento de um sistema de blog diretamente no navegador.

O projeto foi construído utilizando **HTML, CSS e JavaScript puro**, com persistência de dados via **LocalStorage**, permitindo que os posts sejam armazenados no próprio navegador do usuário.

---

# 🚀 Sobre o projeto

O **Blog Editor** é uma aplicação front-end que simula um pequeno **CMS (Content Management System)**.

Com ele é possível:

- Criar novos artigos
- Editar posts existentes
- Excluir posts
- Buscar artigos
- Organizar conteúdos por categoria
- Visualizar os posts em uma página individual
- Visualizar preview do conteúdo em tempo real

Tudo isso sem backend, utilizando apenas recursos do navegador.

---

# ⚙️ Funcionalidades

✔️ Criar artigos  
✔️ Editar artigos  
✔️ Excluir artigos  
✔️ Sistema de busca de posts  
✔️ Criação dinâmica de categorias  
✔️ Preview do artigo em tempo real  
✔️ Upload de imagem  
✔️ Renderização de conteúdo em Markdown  
✔️ Armazenamento no navegador usando **LocalStorage**

---

# 🏗️ Estrutura do projeto :


blog-editor
│
├── index.html # Página principal (lista de artigos)
├── editor.html # Página para criar e editar posts
├── post.html # Página individual do artigo
│
├── css
│ └── style.css
│
├── js
│ ├── posts.js # Renderização da lista e busca
│ ├── post.js # Página do artigo
│ └── editor.js # Criar e editar posts
│
└── README.md


---

# 💻 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- LocalStorage
- Markdown (Marked.js)

---

# 📄 Funcionamento da aplicação

## Criar um post

Na página **editor.html**, o usuário pode adicionar:

- título
- autor
- categoria
- imagem
- conteúdo do artigo

Após clicar em **Publicar**, o post é salvo no LocalStorage.

---

## Visualizar artigo

Cada artigo possui sua própria página:

post.html?id=ID_DO_POST


Nela são exibidos:

- título
- autor
- data
- categoria
- imagem
- conteúdo formatado

---

## Editar artigo

O botão **Editar** abre o artigo novamente no editor para atualização.

editor.html?id=ID_DO_POST


---

## Buscar artigos

Na página principal existe um campo de busca que permite filtrar artigos por:

- título
- conteúdo
- categoria

A busca acontece **em tempo real**.

---

# 📦 Estrutura dos dados

Exemplo de um objeto de post salvo no LocalStorage:

```json
{
  "id": 1711234567890,
  "titulo": "Introdução ao JavaScript",
  "autor": "Tay",
  "categoria": "Programação",
  "imagem": "url-da-imagem",
  "conteudo": "Conteúdo em Markdown...",
  "data": "10/03/2026"
}

🧠 Aprendizados com o projeto

Este projeto explora diversos conceitos importantes do desenvolvimento front-end:

Manipulação do DOM

Eventos em JavaScript

Estrutura de dados em JavaScript

Persistência de dados no navegador

Renderização dinâmica de conteúdo

Organização de código em múltiplos arquivos

Uso de Markdown em aplicações web

📌 Possíveis melhorias

Algumas melhorias que podem evoluir o projeto:

Sistema de login

Integração com backend

Upload de imagens em servidor

Paginação de posts

Sistema de comentários

Filtro por categoria

Dark mode

👩‍💻 Autora

Tatiane Souza
Desenvolvedora Web Full Stack Júnior

Projeto desenvolvido como parte dos estudos em desenvolvimento web e JavaScript, com foco em criação de interfaces dinâmicas e aplicações front-end.

⭐ Se você gostou do projeto, considere deixar uma estrela no repositório.




