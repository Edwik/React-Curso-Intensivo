const MovieDetailsResponse = {
  status: 200,
  data: {
    id: "thor",
    title: "Thor",
    duration: "2h 45min",
    year: 2011,
    score: 7.3,
    category: "PG-13",
    genres: ["action", "adventure", "fantasy"],
    backgroundImage: "https://wallpaperaccess.com/full/222132.jpg",
    directors: ["Kenneth Branagh"],
    recommended: [
      { id: 1, name: "Rio", avatar: "" },
      { id: 2, name: "James", avatar: "" },
    ],
    synopsis:
      "As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
    starring: [
      {
        id: 1,
        name: "Chris Hemsworth",
        movies: 32,
        photo:
          "//upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg",
      },
      {
        id: 2,
        name: "Natalie Portman",
        movies: 53,
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_UY317_CR11,0,214,317_AL_.jpg",
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
        id: "wonder-woman",
        name: "Wonder Woman",
        score: 8.2,
        image:
          "https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
    ],
  },
  msg: "Thor movie details sent successfully!",
};

export default MovieDetailsResponse;
