//Arrays
let mangas = [
    { id: 1, nombre: "Lector Omniciente", capitulos: 212, genero: "acción", popularidad: 30 },
    { id: 7, nombre: "Blue Period", capitulos: 3, genero: "arte", popularidad: 10 },
    { id: 2, nombre: "Blue Lock", capitulos: 16, genero: "deporte", popularidad: 40 },
    { id: 3, nombre: "Kaiju N.8", capitulos: 20, genero: "thiller", popularidad: 20 },
    { id: 4, nombre: "Death Note", capitulos: 1, genero: "misterio", popularidad: 50 },
    { id: 9, nombre: "One Pieza", capitulos: 13, genero: "espaciales", popularidad: 10 },
    { id: 8, nombre: "Live Note", capitulos: 5, genero: "musica", popularidad: 20 },
    { id: 5, nombre: "Naruto", capitulos: 500, genero: "ninjas", popularidad: 80 },
    { id: 6, nombre: "One", capitulos: 700, genero: "piratas", popularidad: 12 },
    { id: 10, nombre: "Dragon Ball", capitulos: 300, genero: "ninjas", popularidad: 200 },
    { id: 11, nombre: "Hunter x Hunter", capitulos: 120, genero: "ninjas", popularidad: 120 },
    { id: 12, nombre: "Bersek", capitulos: 500, genero: "ninjas", popularidad: 820 }
]
let keywords = []
let repetidas = []
let letras = []
//Division: creadora de Keywords
class Division {
    constructor(palabras, nombre, popularidad) {
        this.palabras = palabras
        this.nombre = nombre
        this.popularidad = popularidad
    }
}
//RepeticionWord: salva las palabras repetidas, creandoles su propio objeto
class RepeticionWord {
    constructor(word, popu) {
        this.word = word
        this.popu = popu
    }
}
//Aca separo los nombres de mangas
for (const manga of mangas) {
    manga.nombre = manga.nombre.toUpperCase()
    let nombreDividido = manga.nombre.toUpperCase().split(" ")
    for (let i = 0; i < nombreDividido.length; i++) {
        let palabras1 = new Division(nombreDividido[i], manga.nombre, manga.popularidad)
        keywords.push(palabras1)
    }
}
//Variables necesarias
let pregunta = String(prompt("Busca el manga que quieras.").toUpperCase())
let nombreBuscado = ""
let mangaBuscado = ""
let resultado = false
if ((Boolean(keywords.find((la) => la.palabras === pregunta))) === true) {
    //Do while, para detectar repeticiones y guardarlas
    do {
        for (let i = 0; i < keywords.length; i++) {
            resultado = Boolean(keywords[i].palabras === pregunta)
            if (resultado === true) {
                nombreBuscado = keywords[i].nombre
                popularidadEncontrada = keywords[i].popularidad
                let repetida1 = new RepeticionWord(nombreBuscado, popularidadEncontrada)
                repetidas.push(repetida1)
            }
            resultado = true
        }
    } while (resultado !== true)
    //Con el sort hace que primero aparezca el manga mas popular
    repetidas.sort((a, b) => b.popu - a.popu)
    for (let i = 0; i < repetidas.length; i++) {
        nombreBuscado = repetidas[i].word
        mangaBuscado = mangas.find((el) => el.nombre === nombreBuscado)
        //Cada busqueda aumenta la popularidad
        for (const manga of mangas) {
            if (mangaBuscado.nombre === manga.nombre) {
                manga.popularidad = manga.popularidad + 1
            }
        }
        //Alerta la busqueda
        alert(mangaBuscado.nombre + "\n" + "Chapters: " + mangaBuscado.capitulos + "\n" + "Generos: " + mangaBuscado.genero)
    }
} else if ((Boolean(mangas.find((el) => el.nombre === pregunta))) === true) {
    mangaBuscado = mangas.find((el) => el.nombre === pregunta)
    alert(mangaBuscado.nombre + "\n" + "Chapters: " + mangaBuscado.capitulos + "\n" + "Generos: " + mangaBuscado.genero)
} else if (pregunta !=String){
    alert("no ha ingresado nada")
} else{
    alert("not found.")
}

console.log(mangas)