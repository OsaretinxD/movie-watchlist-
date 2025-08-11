import { renderMovies } from "./render.js";

let movieIDs = JSON.parse(localStorage.getItem("films"));

document.addEventListener("DOMContentLoaded", () => {
    if (movieIDs && movieIDs.length > 0) {
        document.getElementById("watchlist-display").innerHTML = "";
        movieIDs.forEach(async id => {
            const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=f2cd525f`)
            const data = await res.json()
            const movieDisplay = renderMovies(data);
            document.getElementById("watchlist-display").appendChild(movieDisplay)

            let icons = document.querySelectorAll(".icon");
            let movieSection = document.querySelectorAll(".movie-section");

            let length = Math.min(icons.length, movieSection.length);

            for (let i = 0; i < length; i++) {
                let icon = icons[i];
                let section = movieSection[i];

                icon.classList.replace("fas", "fa-solid");
                icon.classList.replace("fa-plus-circle", "fa-circle-minus");

                section.classList.replace("border-gray-700", "border-white")

                section.addEventListener("click", () => {
                    section.remove(); // or any action you want
                });
            }
            
            document.querySelectorAll(".watchlist-btn").forEach(btn => {
                btn.addEventListener("click",  () => {
                    movieIDs = movieIDs.filter(id => id !== btn.getAttribute("data-value"))

                    if (!movieIDs.includes(btn.getAttribute("data-value"))) {
                        
                    }

                    localStorage.setItem("films", JSON.stringify(movieIDs))
                })
            })
        });
    }   
})
