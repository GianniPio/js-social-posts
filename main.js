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


// Creazione dell'array di oggetti

const post = 

[

    {
        'nomeAutore' : "Phil Mangione",
        'dataPost' : 1,
        'testoPost' : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        'immaginePost' : "https://unsplash.it/300/300?image=",
        'numberLikes' : 80
    },

    {
        'nomeAutore' : "Gianni Pio Pellegrino",
        'dataPost' : 2,
        'testoPost' : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        'immaginePost' : "https://unsplash.it/300/300?image=",
        'numberLikes' : 120
    },

    {
        'nomeAutore' : "Jon Snow",
        'dataPost' : 5,
        'testoPost' : "Non c'è vergogna nell'avere paura, mi diceva sempre mio padre. Quello che conta è come l'affrontiamo.",
        'immaginePost' : "https://unsplash.it/300/300?image=",
        'numberLikes' : 2
    },

    {
        'nomeAutore' : "Simone Icardi",
        'dataPost' : 5,
        'testoPost' : "Come va?",
        'immaginePost' : "https://unsplash.it/300/300?image=",
        'numberLikes' : 1
    },

    {
        'nomeAutore' : "Mario Rossi",
        'dataPost' : 7,
        'testoPost' : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        'immaginePost' : "https://unsplash.it/300/300?image=",
        'numberLikes' : 89
    },

    {
        'nomeAutore' : "Giulio Cesare",
        'dataPost' : 4,
        'testoPost' : "Tu quoque, Brute, fili mi?",
        'immaginePost' : "https://unsplash.it/300/300?image=",
        'numberLikes' : 80
    }

]

console.log(post);

