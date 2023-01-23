let elementos=[]
guardados=elementos.concat(JSON.parse(localStorage.getItem("bookStorage")))

let contenedorBookmarks = document.getElementById("contenedorBookmarks")
let bookmarks = document.getElementById("load")
window.addEventListener('load', renderizarMangas(guardados))



function renderizarMangas(arrayDeGuardados) {
  for (const guardado of arrayDeGuardados) {
    let tarjetaManga = document.createElement("li")
    tarjetaManga.id = guardado.id

    tarjetaManga.innerHTML = `
    <li>
    <div class="card color-carta " style="max-width: 100%;">
      <div class="row g-0">
        <div class="col-sm-4" style="max-width: 136.66px;">
          <img class="tamano"
            src="${guardado.imgUrl}"
            class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-sm-8">
          <div class="card-body">
            <span class="span">
              <h5 class="card-title  overflow-hidden text-nowrap text-truncate ">${guardado.manga}</h5>
            </span>
            <p class="card-text overflow-hidden text-nowrap text-truncate ">Capitulos: ${guardado.chapters}</p>
          </div>
        </div>
      </div>
    </div>
  </li>
      `
    contenedorBookmarks.appendChild(tarjetaManga)
  }
}