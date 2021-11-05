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

const posts = 

[

    {
        'nomeAutore' :"Phil Mangione",
        'dataPost' : "1 mese fa",
        'testoPost' : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        'immaginePost' : "https://unsplash.it/568/304?image=",
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
        'immaginePost' : "https://unsplash.it/568/304?image=",
        'numberLikes' : 2
    },

    {
        'nomeAutore' : "Simone Icardi",
        'dataPost' : "12/04/2021",
        'testoPost' : "Come va?",
        'immaginePost' : "https://unsplash.it/568/304?image=",
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
        'immaginePost' : "https://unsplash.it/568/304?image=",
        'numberLikes' : 80
    }

]

console.log(posts);

for (let i = 0; i < posts.length; i++) {
    
    const {nomeAutore, dataPost, testoPost, immaginePost, numberLikes} = posts[i];

    if (immaginePost[i] == "") {
        
     stampaPostImmagine(nomeAutore, dataPost, testoPost, i, numberLikes);
        
    } else {

     stampaWithoutIMG(nomeAutore, dataPost, testoPost, immaginePost, i, numberLikes);

    }
    
}






 
function stampaPostImmagine(elem1, elem2, elem3, number ,elem4) {

    contenitore.innerHTML +=
        `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${elem1}</div>
                        <div class="post-meta__time">${elem2}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${elem3}</div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid=${number}>
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${elem4}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        
        `
}

function stampaWithoutIMG(elem1, elem2, elem3, elem4, number, elem5) {

    contenitore.innerHTML +=
    `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${elem1}</div>
                    <div class="post-meta__time">${elem2}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${elem3}</div>
        <div class="post-image">
            <img src="${elem4}" alt>
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid==${number}>
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${elem5}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    
    `
}

