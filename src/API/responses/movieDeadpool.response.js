const MovieDetailsResponse = {
  status: 200,
  data: {
    id: "deadpool",
    title: "Deadpool",
    duration: "2h 45min",
    year: 2016,
    score: 8.6,
    category: "PG-13",
    genres: ["action", "adventure", "fantasy"],
    backgroundImage: "https://wallpaperaccess.com/full/246557.jpg",
    directors: ["Tim Miller"],
    recommended: [
      { id: 1, name: "Rio", avatar: "" },
      { id: 2, name: "James", avatar: "" },
    ],
    synopsis:
      "Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor. With help from mutant allies Colossus and Negasonic Teenage Warhead (Brianna Hildebrand), Deadpool uses his new skills to hunt down the man who nearly destroyed his life.",
    starring: [
      {
        id: 1,
        name: "Ryan Reynolds",
        movies: 21,
        photo:
          "https://m.media-amazon.com/images/M/MV5BOTI3ODk1MTMyNV5BMl5BanBnXkFtZTcwNDEyNTE2Mg@@._V1_UY317_CR6,0,214,317_AL_.jpg",
      },
      {
        id: 2,
        name: "Morena Baccarin",
        movies: 18,
        photo:
          "https://m.media-amazon.com/images/M/MV5BNmU5Yjk4OTItMjMzZS00MTYzLWI1ZDktYWM4YWM2NTM2YzMzXkEyXkFqcGdeQXVyMzY2OTA2MzM@._V1_UY317_CR12,0,214,317_AL_.jpg",
      },
      { id: 3, name: "Connie Nielsen", movies: 43, photo: "" },
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
        id: "avengers",
        name: "Avengers",
        score: 9.5,
        image:
          "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
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
  msg: "Death Pool movie details sent successfully!",
};

export default MovieDetailsResponse;
