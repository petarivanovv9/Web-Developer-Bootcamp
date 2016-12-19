// movieDB exercise

var movies = [
	{
    "title": "In Bruges",
    "rating": 5,
    "hashWatched": true
  },
	{
    "title": "Frozen",
    "rating": 4.5,
    "hashWatched": false
  },
	{
    "title": "Mad Max Fury Road",
    "rating": 5,
    "hashWatched": true
  },
	{
    "title": "Les Miserable",
    "rating": 3.5,
    "hashWatched": false
  }
];

movies.forEach(function(movie){
  console.log(buildString(movie));
});

function buildString(movie){
  var res = "You have ";
  if (movie.hashWatched) {
    res += "watched ";
  } else {
    res += "not seen ";
  }
  return res + "\"" + movie.title + "\" - " + movie.rating + " stars"
}
