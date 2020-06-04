const MovieDetailsResponse = {
  status: 200,
  data: {
    id: "ant-man",
    title: "Ant Man",
    duration: "2h 45min",
    year: 2015,
    score: 6.5,
    category: "PG-45",
    genres: ["action", "adventure", "fantasy"],
    backgroundImage: "https://wallpaperaccess.com/full/1101778.jpg",
    directors: ["Peyton Reed"],
    recommended: [
      { id: 1, name: "Rio", avatar: "" },
      { id: 2, name: "James", avatar: "" },
    ],
    synopsis:
      "Forced out of his own company by former protégé Darren Cross, Dr. Hank Pym (Michael Douglas) recruits the talents of Scott Lang (Paul Rudd), a master thief just released from prison. Lang becomes Ant-Man, trained by Pym and armed with a suit that allows him to shrink in size, possess superhuman strength and control an army of ants. The miniature hero must use his new skills to prevent Cross, also known as Yellowjacket, from perfecting the same technology and using it as a weapon for evil.",
    starring: [
      {
        id: 1,
        name: "Paul Rudd",
        movies: 20,
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTY4NTEwNDg1MV5BMl5BanBnXkFtZTgwODMwMDA0ODE@._V1_UY317_CR20,0,214,317_AL_.jpg",
      },
      {
        id: 2,
        name: "Michael Douglas",
        movies: 84,
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTQ3NzMzOTQ3MF5BMl5BanBnXkFtZTcwOTE0MzY1Mw@@._V1_UY317_CR13,0,214,317_AL_.jpg",
      },
      {
        id: 3,
        name: "Evangeline Lilly",
        movies: 21,
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTc2MDMzODU0OV5BMl5BanBnXkFtZTgwODIwOTAxMzI@._V1_UY317_CR30,0,214,317_AL_.jpg",
      },
      {
        id: 4,
        name: "Michael Peña",
        movies: 26,
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTczNzcxNTE5NV5BMl5BanBnXkFtZTcwOTE4MTMzMQ@@._V1_UY317_CR15,0,214,317_AL_.jpg",
      },
      {
        id: 5,
        name: "Judy Greer",
        movies: 53,
        photo:
          "https://m.media-amazon.com/images/M/MV5BMTg5MTAyMzMzMl5BMl5BanBnXkFtZTcwMDY2Mzc2NQ@@._V1_UY317_CR0,0,214,317_AL_.jpg",
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
  msg: "Ant Man movie details sent successfully!",
};

export default MovieDetailsResponse;
