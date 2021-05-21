class UI{
    static addFilmToUI(newFilm) {
    
        const filmList = document.getElementById("films");
        filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil   </a>
            </td>
        </tr>
        `
    }
    
    static clearInputs(titleElement,directorElement,urlElement) {
        titleElement.value = "";
        directorElement.value = "";
        urlElement.value = "";
    }
    
    static displayMessages(message,type) {
        const cardBody = document.querySelectorAll(".card-body")[0];
    
        const div =document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        cardBody.appendChild(div);
    
        setTimeout(() => {
            div.remove();
        }, 2000);
    }   
    
    static loadAllFilms(films){
        const filmList = document.querySelector("#films");
    
        films.forEach(function(film){
            filmList.innerHTML += `<tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil   </a>
            </td>
        </tr>`});
    }
    
    static deleteFilmFromUI(element){
        element.parentElement.parentElement.remove();
    }
    
    static clearAllFilmsFromUI(){
        const filmList = document.querySelector("#films");
        // filmList.innerHTML = "";
        while(filmList.firstElementChild != null){
            filmList.firstElementChild.remove();
        }
    }
}

