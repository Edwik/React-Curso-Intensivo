const MovieDetailsResponse = {
  status: 200,
  data: {
    id: "iron-man",
    title: "Iron Man",
    duration: "2h 45min",
    year: 2008,
    score: 8.7,
    category: "PG-13",
    genres: ["action", "adventure", "fantasy"],
    backgroundImage: "https://wallpaperaccess.com/full/183141.jpg",
    directors: ["Jon Favreau"],
    recommended: [
      { id: 1, name: "Rio", avatar: "" },
      { id: 2, name: "James", avatar: "" },
    ],
    synopsis:
      "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
    starring: [
      {
        id: 1,
        name: "Robert Downey",
        movies: 43,
        photo:
          "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg",
      },
      {
        id: 2,
        name: "Gwyneth Paltrow",
        movies: 53,
        photo:
          "https://m.media-amazon.com/images/M/MV5BNzIxOTQ1NTU1OV5BMl5BanBnXkFtZTcwMTQ4MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
      },
      { id: 3, name: "Connie Nielsen", movies: 43, photo: "" },
      { id: 4, name: "Danny Huston", movies: 39, photo: "" },
      { id: 5, name: "David Thewlis", movies: 23, photo: "" },
    ],
    relatedMovies: [
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
      {
        id: "wonder-woman",
        name: "Wonder Woman",
        score: 8.2,
        image:
          "https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      },
    ],
  },
  msg: "Iron Man movie details sent successfully!",
};

export default MovieDetailsResponse;
