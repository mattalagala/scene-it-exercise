$(document).ready(function () {

   
   var items = localStorage.getItem('watchlist')
   var itemsToJSON = JSON.parse(items)


   console.log(itemsToJSON, "this is CL of Items")

   console.log(itemsToJSON[1], "This is CL of items title")
    
    function renderMovies (movs) { 

        movs.map( function buildSingleMovie (currentMovie) {
        
                $('#watchlistContainer').append(`
                    <div class="col-sm-4" class="movies-container id='movContainer">
                        <div class="card" class="movie">
                            <div class="card-body">
                                <img class="card-img-top" src="${currentMovie['Poster']}" alt="Card image cap">
                                <h5 class="card-title">Title: ${currentMovie['Title']}</h5>
                                <p class="card-text">IMDB: ${currentMovie['imdbID']}</p>
                                <p class="card-text">Type: ${currentMovie['Type']}</p>
                             </div>
                        </div>
                    </div>
                `)
            console.log(currentMovie)
            return currentMovie
      }) 
   }
   renderMovies(itemsToJSON)
})
