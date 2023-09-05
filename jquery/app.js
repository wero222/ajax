window.onload = () => {
    getPhotos();
}

function getPhotos() {
    let url = "https://jsonplaceholder.typicode.com/photos?_limit=5&_page=1";

    // HTTP GET AJAX w/jQuery
    $.get(url)
        .done(photos => {
            generaGalleriaFoto(photos);
        })
        .fail(error => {
            console.log(error);
        });
}

function postPhoto() {
    let photo = {
        "albumId": 1,
        "title": "bla bla",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }

    // $.ajaxSetup({
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // });

    console.log
    $.post("https://jsonplaceholder.typicode.com/photos", photo)
        .done(photo => {
            console.log(photo);
        })
        .fail(error => {
            console.log(error);
        });
}

function rimuoviFoto(id) {
    // $.ajaxSetup({
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // });

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos/" + id,
        method: "DELETE",
        // dataType: "json"
    })
        .done(photo => {
            console.log(photo);
        })
        .fail(error => {
            console.log(error);
        });

}

function generaGalleriaFoto(photos) {
    let strHTML = `<div>`;

    for (const f of photos) {
        strHTML += `
        <div class="card">
            <img src="${f.url}" class="card-img-top" alt="${f.title}">
            <div class="card-body">
                <h5 class="card-title">${f.title}</h5>                
            </div>
        </div>
        `;
    }

    strHTML += "</div>";

    document.getElementById("listaFoto").innerHTML = strHTML;
}