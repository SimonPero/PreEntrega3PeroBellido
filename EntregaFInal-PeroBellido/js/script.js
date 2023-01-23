let bookmarked = []
let botones = document.getElementsByClassName("botones")
let nombres = document.getElementsByClassName("span")
pivot = String(JSON.parse(localStorage.getItem("bookStorage")))



pivot == "null" || pivot == ""? "" : pivot !== "null" || pivot1 == "" ? bookmarked = JSON.parse(localStorage.getItem("bookStorage")) : ""

class crearManga {
    constructor(manga, chapters, imgUrl, id) {
        this.manga = manga
        this.chapters = chapters
        this.imgUrl = imgUrl
        this.id = id
    }
}

let i = -1
for (const boton of botones) {
    i++
    boton.nombre = nombres[i]
    boton.addEventListener("click", function guardar() {
        if (bookmarked.find((el) => el.manga === boton.nombre.innerText)) {
            x = bookmarked.indexOf(bookmarked.find((el) => el.manga === boton.nombre.innerText))
            bookmarked.splice(x, x + 1)
            localStorage.setItem("bookStorage", JSON.stringify(bookmarked))
            Toastify({
                text: "Unmarked",
                className: "pato",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();
        } else {
            fetch("data.json")
                .then(mangas => mangas.json())
                .then(mangas => {
                    indexMangas = mangas.indexOf(mangas.find((el) => el.nombre === boton.nombre.innerText))
                    bookmarked.push(new crearManga(mangas[indexMangas].nombre, mangas[indexMangas].capitulos, mangas[indexMangas].imgUrl, mangas[indexMangas].id))
                    localStorage.setItem("bookStorage", JSON.stringify(bookmarked))
                    console.log(boton.inner)
                })
                Toastify({
                    text: "Marked",
                    className: "info",
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                  }).showToast();
        }
    })
}

