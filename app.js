// Bring in Express code
const express = require('express')
		const app = express()
		const port = 3000

		app.use(express.json()) // This line is necessary for Express to be able to parse JSON in request body's

		const favoriteMovieList = [{
			title: "Star Wars",
			starRating: 5,
			isRecommended: true,
			createdAt: new Date(),
			lastModified: new Date()
		}, {
			title: "The Avengers",
			starRating: 4,
			isRecommended: true,
			createdAt: new Date(),
			lastModified: new Date()
		}];

		app.get("/all-movies", (req, res) => {
			res.json({
                success: true,
                favoriteMovieList: favoriteMovieList
            })
		})

		

        app.get("/single-movie/:titleToFind",(req, res)=>{
			const movieTitleToFind = req.params.titleToFind
			const movieTitle = favoriteMovieList.find((movie)=>{
				return movie.title === movieTitleToFind
			})
			if(movieTitle === undefined){
				res.json({
					success: false,
					message: 'Movie not found'
				})
				return
			}
			res.json({
				success: true,
				foundMovie: movieTitle
			})
		 })

		 app.post("/new-movie", (req, res)=>{

			// Validation code for checking that the incoming data to be created is of the proper shape and has the required fields.
		 	if (req.body.movieTitle === undefined || typeof(req.body.movieTitle) !== "string") {
				res.json({
		 			success: false,
		 			message: "movie title is required and must be a string"
					
				})
				return movieTitle
			}
		 	if (req.body.starRating === undefined || typeof(req.body.starRating) !== "number"){
				res.json({
					success: false,
		 			message: "star rating is required and must be a number"
				})
	 		return starRating
		 	} 

			if (req.body.isRecommended === undefined || typeof(req.body.isRecommended) !==
			"boolean"){
				res.json({
					success: true,
					message: "recommended"

				})

			}
		 
			 
			//   if (req.body.date === undefined || typeof(req.body.date) !== "number"){
			//   	res.json({
		  	// 	success: false,
			// 		message: "date is required and must be a number"
			//   	})
			//   	return date
			//   }

			 
			  const newMovie = {}
			  newMovie.movieTitle = req.body.movieTitle
			  newMovie.starRating = req.body.starRating
			  newMovie.isRecommended = req.body.isRecommended
			  newMovie.createdAt = new Date()

			  favoriteMovieList.push(newMovie)
		
			 res.json({
			 	success: true
			 })

			
			 	res.json({
			 		success: true
			 	})
			 })
		
			 app.delete("/delete-movie/: titleToDelete", (req, res)=>{

				const movieTitleToDelete = req.params.titleToDelete
		   
				const indexOfmovie = favoriteMovieList.findIndex((movie)=>{
				   return movie.title === movieTitleToDelete
				})
		   
				favoriteMovieList.splice(indexOfMovie, 1)
		   })

		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`)
		})