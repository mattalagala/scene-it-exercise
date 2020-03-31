



$(document).ready(function () {
    
    function renderMovies (movies) { 
   
        var moviesHTML =  movies.map( function buildSingleMovie (currentMovie) {
        
                $('#movieRow').append(`
                    <div class="col-sm-4" class="movies-container id='movContainer">
                        <div class="card" class="movie">
                            <div class="card-body">
                                <img class="card-img-top" src="${currentMovie['Poster']}" alt="Card image cap">
                                <h5 class="card-title">${currentMovie['Title']}</h5>
                                <p class="card-text">${currentMovie['Year']}</p>
                                <button type='button' class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add Movie</button>
                              
                            </div>
                        </div>
                    </div>
                `)
            
                
           
            console.log(currentMovie)
            return currentMovie
    
    }) 
    console.log(moviesHTML, 'this is CL of moviesHTML')
    
    // return moviesHTML.join('')
    
    }

    console.log( "Document Loaded!" )
    
    
    $('#moviesSearchForm').on('submit', function (e) {
    
       

        // renderMovies(searchMovies)

        

        var $test2 = movieData[9]['Title']

        console.log($test2, "?????") 

        if ($test2) {

            

        } else {console.log('need search Movies')}
    
        e.preventDefault()

        var searchString = $('#searchMovies').val()

        console.log(searchString, '!!!!!')

       let URLEncodedSearchString = encodeURIComponent(searchString)
       
       console.log(URLEncodedSearchString)

       axios.get("http://www.omdbapi.com/?apikey=f631569a&s=" + URLEncodedSearchString)
        .then(function (response) {
            var results = response.data.Search
            console.log('here is the response from the OMDB API:')
            console.log(results)
            renderMovies(results)
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            return results
        })


    })

   

    // function saveToWatchlist (imdbID) {
    
    //     console.log("savetoWatchlist function fired")

    //         let movie = movieData.find(function (currentMovie) {
                
    //             return currentMovie.imdbID === imdbID
    //         })
    //         console.log(movie, "CL of movie")

    //         let watchlistJSON = localStorage.getItem('watchlist')
            
    //         let watchlist = JSON.parse(watchlistJSON)

    //         if (watchlist === null) {

    //             watchlist = []

    //         }

    //         watchlist.push(movie)
    //         watchlistJSON = JSON.stringify(watchlist)
    //         localStorage.setItem('watchlist', watchlistJSON)
            

    // }

    
    

})


