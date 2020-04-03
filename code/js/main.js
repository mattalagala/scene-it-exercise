
// Document ready function to load js files first

$(document).ready(function () { // this function contains multiple functions for rendering movies
    
    console.log( "Document Loaded!" )
    
    function renderMovies (movies) { 

        // This function creates a local storage item (like the watchlist in Part 2) called 
        // resultDataStored as a string. This is needed to retrieve the imdbID for the saveToWatchlist (). 
        const resultData = movies
        resultDataStored = JSON.stringify(resultData)
        localStorage.setItem('resultData', resultDataStored)
        // 

        console.log(resultData, "resultData created")
   
        // This is the rendering of each card as the .map function iterates through movies. 
        var moviesHTML =  movies.map( function buildSingleMovie (currentMovie) { 
            
                $('#movieRow').append(`
                    <div class="col-sm-4" class="movies-container id='movContainer">
                        <div class="card" class="movie">
                            <div class="card-body">
                                <img class="card-img-top" src="${currentMovie['Poster']}" alt="Card image cap">
                                <h5 class="card-title">${currentMovie['Title']}</h5>
                                <p class="card-text">${currentMovie['Year']}</p>
                                <button type='button' class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add Movie</button>
                            <div>
                        </div>
                    </div>
                `)
            console.log(currentMovie)
            return currentMovie
        
        }) 

            console.log(moviesHTML, 'this is CL of moviesHTML')    
    }
    
    // I couldn't get this function to work in the main.js file. I had to move it to index.html as a script.

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
    $('#buttonID').on('submit', function submitreload () {
        
        location.reload(true)
        console.log(reload, 'RELOAD FIRED')
        
    })
    
    $('#moviesSearchForm').on('submit', function submitSearchForm (e) {
    
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

        
    
        // location.reload(true)

        e.preventDefault()
    })
    
   
    
    

    
    

})


