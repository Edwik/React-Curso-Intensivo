const MovieDetailsResponse = {
  status: 200,
  data: {
    id: "avengers",
    title: "Avengers",
    duration: "2h 45min",
    year: 2012,
    score: 9.5,
    category: "PG-13",
    genres: ["action", "adventure", "fantasy"],
    backgroundImage: "https://wallpaperaccess.com/full/500728.jpg",
    directors: ["Joss Whedon", "Joe Russo", "Anthony Russo"],
    recommended: [
      { id: 1, name: "Rio", avatar: "" },
      { id: 2, name: "James", avatar: "" },
    ],
    synopsis:
      "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's \"dream team\" are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
    starring: [
      {
        id: 1,
        name: "Chris Evans",
        movies: 21,
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTU2NTg1OTQzMF5BMl5BanBnXkFtZTcwNjIyMjkyMg@@._V1_UY317_CR6,0,214,317_AL_.jpg",
      },
      {
        id: 2,
        name: "Scarlett Johansson",
        movies: 39,
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg",
      },
      {
        id: 3,
        name: "Robert Downey",
        movies: 43,
        photo:
          "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg",
      },
      { id: 4, name: "Danny Huston", movies: 39, photo: "" },
      { id: 5, name: "David Thewlis", movies: 23, photo: "" },
    ],
    relatedMovies: [
      {
        id: "iron-man",
        name: "Iron Man",
        score: 8.7,
        image:
          "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
      {
        id: "deadpool",
        name: "Deadpool",
        score: 8.6,
        image:
          "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
      {
        id: "ant-man",
        name: "Ant Man",
        score: 6.5,
        image:
          "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
      {
        id: "thor",
        name: "Thor",
        score: 7.3,
        image:
          "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
      {
        id: "wonder-woman",
        name: "Wonder Woman",
        score: 8.2,
        image:
          "https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
    ],
  },
  msg: "Avenger movie details sent successfully!",
};

export default MovieDetailsResponse;
