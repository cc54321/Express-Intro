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
			  newMovie.lastModified = new Date()

			  favoriteMovieList.push(newMovie)
		
			 res.json({
			 	success: true
			 })

			 res.json({
				success: true
			})
			 
			 })

			 app.put('update-movie/:titleToUpdate',(req,res)=>{
				const titleToUpdate = req.params.titleToUpdate;
				const originalMovieIndex = favoriteMovieList.findIndex(movie=> movie.title === titleToUpdate);
				const originalMovie = favoriteMovieList[originalMovieIndex];
				const updatedMovie = {};

				if (req.body.title !== undefined){
					updatedMovie.title = req.body.title;	
				} else {
					updatedMovie.title = originalMovie.title;
				}
				if (req.body.starRating !== undefined){
					updatedMovie.starRating = req.body.starRating;
				} else {
					updatedMovie.starRating = originalMovie.starRating;
				}

				if (req.body.isRecommended !== undefined){
					updatedMovie.isRecommended = originalMovie.isRecommended;
				} else {
					updatedMovie.isRecommended = originalMovie.isRecommended;
				}

				updatedMovie.createdAt = originalMovie.createdAt;
				updatedMovie.lastModified = new Date();
				
				favoriteMovieList[originalMovieIndex] = updatedMovie;

				res.json({
					success: true
				})

			 })
		
			 app.delete("/delete-movie/:titleToDelete", (req, res)=>{

				const movieTitleToDelete = req.params.titleToDelete
		   
				const deleteMovieIndex = favoriteMovieList.findIndex(movie=> ovie.title === movieTitleToDelete);
				favoriteMovieList.splice(indexOfMovie, 1)
				})
				res.json({
					success: true
				})
		   
				
		   
		   
		   
			 

		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`)
		})