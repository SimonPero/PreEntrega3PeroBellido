let mangas = [
    { id: 1, nombre: "Lector Omniciente", capitulos: 212, genero: "acción", popularidad: 30, imgUrl: "https://swebtoon-phinf.pstatic.net/20200826_292/1598426983152Pok8y_JPEG/5.jpg?type=crop540_540" },
    { id: 7, nombre: "Blue Period", capitulos: 3, genero: "arte", popularidad: 10, imgUrl: "https://images.cdn2.buscalibre.com/fit-in/360x360/98/84/9884b7096b65dd3c2f577dc2d5993768.jpg" },
    { id: 2, nombre: "Blue Lock", capitulos: 16, genero: "deporte", popularidad: 40, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/698463.jpg" },
    { id: 3, nombre: "Kaiju N.8", capitulos: 20, genero: "thiller", popularidad: 20, imgUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974725984/kaiju-no-8-vol-1-9781974725984_hr.jpg" },
    { id: 4, nombre: "Death Note", capitulos: 1, genero: "misterio", popularidad: 50, imgUrl: "https://www.justwatch.com/images/poster/238717917/s332/temporada-1" },
    { id: 5, nombre: "Naruto", capitulos: 500, genero: "ninjas", popularidad: 80, imgUrl: "http://pm1.narvii.com/6876/f415baa00235a34dc51e90b5fc160390653dd6eer1-988-1524v2_uhq.jpg" },
    { id: 6, nombre: "One Piece", capitulos: 700, genero: "piratas", popularidad: 12, imgUrl: "https://static.wikia.nocookie.net/onepiece/images/6/64/Volumen_91.png/revision/latest?cb=20181122184722&path-prefix=es" },
    { id: 10, nombre: "Dragon Ball Super", capitulos: 300, genero: "ninjas", popularidad: 200, imgUrl: "https://pbs.twimg.com/media/EeItUdYXsAEmilq.jpg" },
    { id: 12, nombre: "Berserk", capitulos: 500, genero: "terror", popularidad: 820, imgUrl: "https://www.nippon.com/es/ncommon/contents/japan-topics/1261990/1261990.jpg" },
    { id: 11, nombre: "Hunter X Hunter", capitulos: 120, genero: "cazadores", popularidad: 120, imgUrl: "https://static.wikia.nocookie.net/hunterxhunter/images/c/c1/Volumen_34.jpg/revision/latest?cb=20180921041155&path-prefix=es" },
]
let bookmarked = []
let botones = document.getElementsByClassName("botones")
let nombres = document.getElementsByClassName("span")
pivot = String(JSON.parse(localStorage.getItem("bookStorage")))

if (pivot == "null" || pivot == "") {
} else if (pivot !== "null" || pivot1 == "") {
    bookmarked = JSON.parse(localStorage.getItem("bookStorage"))
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
            console.log(document.boton.innerHTML)
        } else {
            indexMangas = mangas.indexOf(mangas.find((el) => el.nombre === boton.nombre.innerText))
            bookmarked.push(new crearManga(mangas[indexMangas].nombre, mangas[indexMangas].capitulos,mangas[indexMangas].imgUrl, mangas[indexMangas].id))
            localStorage.setItem("bookStorage", JSON.stringify(bookmarked))
            console.log(boton.inner)
        }
    })
}

class crearManga {
    constructor(manga, chapters, imgUrl, id) {
        this.manga = manga
        this.chapters = chapters
        this.imgUrl = imgUrl
        this.id = id
    }
}






