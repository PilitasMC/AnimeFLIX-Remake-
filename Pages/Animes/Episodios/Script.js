//NUEVA VERSION DE MI REPRODUCTOR MALOTE OH SI MI COMPA
let animeName = "Anime" //nombre del anime (si es largo ponlo con siglas KNY (kimetsu no yaiba))
let siguiente = document.getElementById("siguiente"); //Boton debajo del player
let anterior = document.getElementById("anterior");  //Btn under player
let anime = document.getElementById("anime"); //video
let title = document.getElementById("name"); //Nombre del episodio
let capNum = document.getElementById("capitulo"); //Numero del episodio

let titleName = ["",]; //Nombre de los videos (Van manual si lo se compa) cuando aprenda un poco mas, sera automatico

//INCREMENTAMOS ESTAS PARA LOS CAMBIOS DE VIDEOS & LO MISMO APLICA PARA EL NUMERO DEL CAPITULO
next = localStorage.getItem(animeName); //Obtiene el valor guardado para elegir el ultimo episodio visto
watching()
titulo();
    //FUNCION PARA CAMBIAR DE VIDEOS
    siguiente.onclick = function(){
        mayor();
        anime.setAttribute("src",`${next}.mp4`);
        localStorage.setItem(animeName,next); //Actualizar al episodio visto +
    }
    anterior.onclick = function(){
        menor();
        anime.setAttribute("src",`${next}.mp4`);
        localStorage.setItem(animeName,next); //Actualizar al episodio visto -
    }
    //FUNCION PARA SIGUIENTE
    function mayor(){
        if(next == 12){     //Cambia aqui el numero de episodios que tiene el anime
                next = 12;
        }
        else{
            next++;
            titulo();
            capNum.innerHTML = next;
        }
    }
    //FUNCION PARA ANTERIOR
    function menor(){
        if(next == 1){
            next = 1;
        }
        else{
            next--;
            titulo();
            capNum.innerHTML = next;
        }
    }
//FUNCION DE TITULO
function titulo(){
    title.innerHTML = titleName[next];
    capNum.innerHTML = next;
}
//Comprueba si nex es igual a ZERO en ese caso, inicia en 1, asi evitamos que el src se quede en ZERO
function watching(){
    if(next == null){
        next = 1;
        localStorage.setItem(animeName,next);
        anime.setAttribute("src",`${next}.mp4`);
    }
    else{
        next = localStorage.getItem(animeName);
        anime.setAttribute("src",`${next}.mp4`);
    }
}
//Y aca la funcion de Descargar el video
document.getElementById("download").addEventListener("click", function() {
    const video = document.getElementById("anime");
    const url = video.src;
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "video.mp4";
    document.body.appendChild(a);
    a.click();
  });
  