// Fetch movie data from API
function fetchMovies() {
  fetch("https://seleksi-sea-2023.vercel.app/api/movies")
    .then(response => response.json())
    .then(data => {
      const movieList = document.getElementById("movieList");

      data.forEach(movie => {
        // Create movie card element and populate with data
        const movieCard = document.createElement("div");
        movieCard.classList.add("col-6", "col-md-4", "col-lg-3", "mb-4");
        movieCard.innerHTML = `
          <div class="card">
            <img src="${movie.poster_url}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${movie.description}</p>
              <p class="card-text">Age Rating: ${movie.age_rating}</p>
              <p class="card-text">Ticket Price: ${movie.ticket_price}</p>
              <a href="reservation.html" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        `;
        movieList.appendChild(movieCard);
      });
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  fetchMovies();
});
