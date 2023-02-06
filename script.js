//Menu
$(".hamburguer").click(function(){
    $("#nav__bar").slideToggle();
    $("#nav__bar").css("display","flex")
  });

//Buscador
// Obtener la caja de búsqueda, la lista de animes y el contenedor de resultados
let searchInput = document.getElementById("search__bar");
let animeList = document.getElementById("anime-list");
let searchResults = document.getElementById("search-results");

// Escuchar el evento keyup en la caja de búsqueda
searchInput.addEventListener("keyup", searchAnime);

function searchAnime() {
  // Obtener el valor de búsqueda
  let searchValue = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";
  searchResults.style.display = "flex";
  console.log(searchValue)
  // Si no hay un valor de búsqueda, ocultar los resultados
  if (!searchValue) {
    searchResults.style.display = "none";
    return;
  }

  // Obtener todos los enlaces con la clase anime
  let animeLinks = animeList.getElementsByClassName("look");

  // Recorrer todos los enlaces
  for (let i = 0; i < animeLinks.length; i++) {
    // Obtener el nombre del anime
    let anime = animeLinks[i].textContent.toLowerCase();

    // Si el valor de búsqueda se encuentra en el nombre del anime, agregar el enlace al contenedor de resultados
    if (anime.indexOf(searchValue) > -1) {
      let newLink = animeLinks[i].cloneNode(true);
      searchResults.appendChild(newLink);
    }
  }
}
