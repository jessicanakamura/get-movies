import axios from "axios";

const genreTranslation = {
    Action: "Ação",
    Adventure: "Aventura",
    Animation: "Animação",
    Comedy: "Comédia",
    Crime: "Crime",
    Documentary: "Documentário",
    Drama: "Drama",
    Family: "Família",
    Fantasy: "Fantasia",
    History: "História",
    Horror: "Terror",
    Music: "Música",
    Mystery: "Mistério",
    Romance: "Romance",
    "Science Fiction": "Ficção Científica",
    "TV Movie": "Filme de TV",
    Thriller: "Suspense",
    War: "Guerra",
    Western: "Faroeste"
};

axios.get('https://api.themoviedb.org/3/genre/movie/list', {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTAwYWU3ZjIyNjdjMTc2NjljZDcyYWNkMWEyYzcxMSIsInN1YiI6IjY0OGZiYjQzYzJmZjNkMDBmZmJjNGQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vO3z8ovSdHysaXLhOyQI9HKd867qcMf45I8iHZKRh2M'
    }
})
.then((response) => {
    const buttonsGenres = response.data.genres.map((genre) => {
        return `<button class="sectionFilterButton">${genreTranslation[genre.name]}</button>`
    })

    document.querySelector('.sectionFilterButtons').innerHTML = buttonsGenres;
})
.catch((error) => {
    console.log(error);
})

