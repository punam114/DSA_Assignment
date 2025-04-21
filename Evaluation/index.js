// 1.Calculate the average rating for each movie.
// 2.Find the movie with the highest average rating.
// 3.List movies that have a rating lower than 3.

//   Average ratings:
//   Inception: 4.75
//   Titanic: 3.6
//   The Matrix: 5
//   Avatar: 3

// Movie with highest average rating: "The Matrix" (avg: 5)
// Movies with low ratings: ["Avatar"]

let movies = [
    { title: "Inception", director: "Christopher Nolan", releaseYear: 2010, ratings: [5, 4, 5, 5] },
    { title: "Titanic", director: "James Cameron", releaseYear: 1997, ratings: [4, 4, 3, 2, 5] },
    { title: "The Matrix", director: "The Wachowskis", releaseYear: 1999, ratings: [5, 5, 5, 5] },
    { title: "Avatar", director: "James Cameron", releaseYear: 2009, ratings: [3, 2, 4, 3] }
  ]


for(let i=0;i<movies.length;i++){
    let rating = movies[i].ratings
    let length =  movies[i].ratings.length
    // console.log(length)
    let sum = rating.reduce((acc,cur) => acc+cur)
    let average = [sum/length]
    console.log(`${movies[i].title} : ${average}`)

    if(average<=3){
      console.log(`Movies with low ratings:[${movies[i].title}]`)
    }
  }
  





  