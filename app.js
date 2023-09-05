// Approfindite se ne avete voglia
// XMLHttpRequest

// Promise
let chiamataGetAPI = new Promise((resolve, reject) => {
    setInterval(() => {
        // promise che torni OK se il numero < 50
        // promise che torni KO se il numero > 50
        if (Math.random() * 100 < 50) {
            resolve("Il numero è minore di 50");
        } else {
            reject("Il numero è maggiore di 50");
        }
    }, 3000);
});

chiamataGetAPI
    .then(data => {
        console.log("successo", data);
    })
    .catch(error => {
        console.log("errore", error);
    });

console.log("chiamataGetAPI effettuata");

// fetch API
// funzioni che servono per effettuare richieste HTTP da javascript (AJAX)
let url = "http://localhost:3050/todos";

// HTTP GET

fetch(url)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            // 404
            console.log(res.status);
        }
    })
    .then(todos => {
        generaHTMLTodo(todos);
        console.log(todos);
    })
    .catch(error => {
        console.log("ERRORE:", error);
    })

function generaHTMLTodo(todos) {
    let strHTML = "<ul>";
    for (const t of todos) {
        strHTML += `<li>${t.title}</li>`;
    }
    strHTML += "</ul>";
    document.getElementById("app").innerHTML = strHTML;
}

// HTTP POST
let nuovoTodo = {
    "userId": 1,
    "title": "pippo",
    "completed": false
}

// opzione sintattica 1
const req = new Request(url, {
    method: "POST",
    headers: new Headers({
        "Content-Type": "application/json",
    }),
    body: JSON.stringify(nuovoTodo)
});
fetch(req)
    .then(res => res.json())
    .then(todo => console.log(todo))
    .catch(error => console.log(error));

// opzione sintattica 2
fetch(url, {
    method: "POST",
    headers: new Headers({
        "Content-Type": "application/json",
    }),
    body: JSON.stringify(nuovoTodo)
})
    .then(res => res.json())
    .then(todo => console.log(todo))
    .catch(error => console.log(error));

// HTTP DELETE
fetch("https://jsonplaceholder.typicode.com/todos/2", {
    method: "DELETE"
})
    .then(res => console.log("DELETE:", res.status))
    .catch(error => console.log(error));
