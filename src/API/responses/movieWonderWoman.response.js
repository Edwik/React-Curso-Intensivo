const MovieDetailsResponse = {
  status: 200,
  data: {
    id: "wonder-woman",
    title: "Wonder Woman",
    duration: "2h 45min",
    year: 2017,
    score: 8.2,
    category: "PG-13",
    genres: ["action", "adventure", "fantasy"],
    backgroundImage: "",
    directors: ["Patty Jenkins"],
    recommended: [
      {
        id: 1,
        name: "Rio",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",
      },
      {
        id: 2,
        name: "James",
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",
      },
    ],
    synopsis:
      "Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that is raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.",
    starring: [
      {
        id: 1,
        name: "Gal Gadot",
        movies: 21,
        photo:
          "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_.jpg",
      },
      {
        id: 2,
        name: "Chris Pine",
        movies: 53,
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTM4OTQ4NTU3NV5BMl5BanBnXkFtZTcwNjEwNDU0OQ@@._V1_UX214_CR0,0,214,317_AL_.jpg",
      },
      {
        id: 3,
        name: "Connie Nielsen",
        movies: 43,
        photo:
          "https://m.media-amazon.com/images/M/MV5BYzZiYTQ4YTAtMzRkMi00ZDZlLWFkZWItNGI2ZTIyODRiYTc4XkEyXkFqcGdeQXVyMjUzMjc2MjE@._V1_UY317_CR12,0,214,317_AL_.jpg",
      },
      {
        id: 4,
        name: "Danny Huston",
        movies: 39,
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTA1MTk4NDA0NjZeQTJeQWpwZ15BbWU3MDQ5NzIzNTk@._V1_UY317_CR25,0,214,317_AL_.jpg",
      },
      {
        id: 5,
        name: "David Thewlis",
        movies: 23,
        photo:
          "https://m.media-amazon.com/images/M/MV5BNTA3MjM4NTE0NV5BMl5BanBnXkFtZTcwOTU1OTY4NQ@@._V1_UX214_CR0,0,214,317_AL_.jpg",
      },
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
        id: "thor",
        name: "Thor",
        score: 7.3,
        image:
          "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
    ],
  },
  msg: "Wonder Woman movie details sent successfully!",
};

export default MovieDetailsResponse;
