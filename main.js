// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.


// 1. Creare nell'array di oggetti

// 2. Stampare i relativi elementi nell'HTML (non tutte con le immagini)
    // 2.1 Se la chiave immagini è vuota, non stampa l'immagine ->if

// 3. Rendere il tasto like cliccabile e aumentare il numero di like 

let contenitore = document.querySelector(".posts-list");


// Creazione dell'array di oggetti

const post = 

[

    {
        'nomeAutore' :"Phil Mangione",
        'dataPost' : "1 mese fa",
        'testoPost' : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        'immaginePost' : "https://unsplash.it/300/300?image=",
        'numberLikes' : 80
    },

    {
        'nomeAutore' : "Gianni Pio Pellegrino",
        'dataPost' : " 2 mesi fa",
        'testoPost' : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        'immaginePost' : "",
        'numberLikes' : 120
    },

    {
        'nomeAutore' : "Jon Snow",
        'dataPost' : "31/12/2020",
        'testoPost' : "Non c'è vergogna nell'avere paura, mi diceva sempre mio padre. Quello che conta è come l'affrontiamo.",
        'immaginePost' : "https://unsplash.it/300/300?image=",
        'numberLikes' : 2
    },

    {
        'nomeAutore' : "Simone Icardi",
        'dataPost' : "12/04/2021",
        'testoPost' : "Come va?",
        'immaginePost' : "https://unsplash.it/300/300?image=",
        'numberLikes' : 1
    },

    {
        'nomeAutore' : "Mario Rossi",
        'dataPost' : "14/05/21",
        'testoPost' : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        'immaginePost' : "",
        'numberLikes' : 89
    },

    {
        'nomeAutore' : "Giulio Cesare",
        'dataPost' : "01/20/21",
        'testoPost' : "Tu quoque, Brute, fili mi?",
        'immaginePost' : "https://unsplash.it/300/300?image=",
        'numberLikes' : 80
    }

]

console.log(post);

for (let i = 0; i < post.length; i++) {
    
    const {nomeAutore, dataPost, testoPost, immaginePost, numberLikes} = post[i];

    if (immaginePost[i] == "") {
        
        contenitore.innerHTML +=
        `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${nomeAutore}</div>
                        <div class="post-meta__time">${dataPost}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${testoPost}</div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${numberLikes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        
        `
    } else {

        contenitore.innerHTML +=
        `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${nomeAutore}</div>
                        <div class="post-meta__time">${dataPost}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${testoPost}</div>
            <div class="post-image">
                <img src="${immaginePost}" alt>
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${numberLikes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        
        `

    }

    
}

