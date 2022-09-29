/* 
Programa una clase llamada pelicula.
La Clase recibira un oobjeto al momento de instanciarse con los siguientes
datos: ID de la pelicula en IMBD,titulo,director, año de estreno,pais o paises de origen,
generos y clasificacion en IMBD.
- Todos los datos del Objeto Son obligatorios.
    - Valida que ID IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
    - Valida que el titulo no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caractres.
    - Valida que el año de estreno sea un numero entero de 4 digitos.
    - Valida que el pais o paises sea introducidos en forma de arreglo.
    - Valida que los generos sean introducidos en forma de arreglo.
    - Valida que los generos introducidos esten dentro de los generos aceptados*.
    - Crea un metodo estatico que devuelva los generos aceptados*.
    - Valida que la calificacion sea un numero ente 0 y 10 pudiendo ser decimal de una posicion.
     -  Crea un metodo que devuleva toda la fica tecnica de la pelicula.
     - Apartir de un arreglo con la informacion de 3 peliculas genera 3 instancias de la clase de forma automatizada e imprime la ficha tecnica de cada pelicula.

  *Generos Aceptados: Action,Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game-Show, History,
  Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-show, Thriller, War, Western.
*/

class Film {
    constructor({ id, title, director, premiere, country, genres, rating }) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.premiere = premiere;
        this.country = country;
        this.genres = genres;
        this.rating = rating;

        this.validateIMDB(id);
        this.validateTitle(title);
        this.validateDirector(director);
        this.validatePremiere(premiere);
        this.validateCountry(country);
        this.validaGneres(genres);
        this.validateRating(rating);
    }

    static get listOfGenres() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History",
            "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-show", "Thriller", "War", "Western"];
    }

    static acceptedGenres() {
        return console.info(`Accepted genres are: ${Film.listOfGenres.join(", ")}`);
    }

    validateString(property, values) {
        if (!values) return console.warn(`${property} "${values}" Empty`);
        if (typeof values !== "string") return console.error(`${property} "${values}" entered, not a text string`);
        return true;
    }

    validateStringsLength(property, values, lengths) {
        if (values.length > lengths) return console.error(`${property} "${values}" excede el numero de caracteres permitidos (${lengths}).`);
        return true;
    }

    validateNumber(property, values) {
        if (!values) return console.warn(`${property} "${values}" Empty`);
        if (typeof values !== "number") return console.warn(`${property} "${values}" entered, not a number`);
        return true;
    }

    validateArray(property, values) {
        if (!values) return console.warn(`${property} "${values}" Empty`);
        if (!(values instanceof Array)) return console.error(`${property} "${values}" entered, not data`);

        for (let string of values) {
            if (typeof string !== "string") return console.error(`The "${string}" value entered is not a text string`);
        }

        return true;
    }

    validateIMDB(id) {
        if (this.validateString("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id)))
                return console.error(`IMDB ID "${id}" is not valid, it must have 9 characters, the first 2 lowercase letters and the remaining 7 numbers.`)
        }
    }

    validateTitle(title) {
        if (this.validateString("Title", title)) {
            this.validateStringsLength("Title", title, 100);
        }
    }

    validateDirector(director) {
        if (this.validateString("Director", director)) {
            this.validateStringsLength("Director", director, 50);
        }
    }

    validatePremiere(premiere) {
        if (this.validateNumber("Year of film release", premiere))
            if (!(/^([0-9]){4}$/.test(premiere)))
                return console.error(`Year of "${premiere}" of the film is not valid,it must be a 4-digit number.`);
    }

    validateCountry(country) {
        this.validateArray("Country", country);
    }

    validaGneres(genres) {
        if (this.validateArray("Genres", genres)) {
            for (let genre of genres) {
                console.log(genre, Film.listOfGenres.includes(genre))
                if (!Film.listOfGenres.includes(genre)) {
                    console.error(`wrong genders "${genres.join(", ")}`);
                    Film.acceptedGenres();
                }
            }
        }
    }

    validateRating(rating) {
        if (this.validateNumber("Movie rating", rating))
            return (rating < 0 || rating > 10)
                ? console.error(`The rating of the film must be in a range between 0 and 10`)
                : this.rating = rating.toFixed(1);
    }

    dataSheet(){
        console.info(`Data Sheet:\nTitle: "${this.title}"\nDirector: "${this.director}"\nYear: "${this.premiere}"\nCountry: "${this.country.join("-")}"\nGenders: "${this.genres.join(", ")}"\nRating: "${this.rating}"\nIMDb ID: "${this.id}"`);
    }
}

const myMovies = [
    {
    id: "tt0416449",
    title: "300",
    director: "David Soto",
    premiere: 2022,
    country: ["Colombia", "Brasil"],
    genres: ["Comedy"],
    rating: 7.789
    },
    {
    id: "tt0416450",
    title: "nffjfjfj",
    director: "David Soto",
    premiere: 2019,
    country: ["Colombia", "NN"],
    genres: ["Comedy"],
    rating: 9
    },
    {
    id: "tt0416451",
    title: "Monster Inc",
    director: "lux",
    premiere: 2021,
    country: ["Colombia", "France"],
    genres: ["Comedy", "Family"],
    rating: 8
    }
];

myMovies.forEach(element => new Film(element).dataSheet());


//Film.acceptedGenres();

/*
const movie = new Film({
    id: "tt0416449",
    title: "300",
    director: "David Soto",
    premiere: 2022,
    country: ["Colombia", "France"],
    genres: ["Comedy"],
    rating: 7.789
});

movie.dataSheet();
*/





