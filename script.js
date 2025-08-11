import { renderMovies } from "./render.js";

const form = document.getElementById("submit-search");
const movieName = document.getElementById("movie-name");
const params = new URLSearchParams(window.location.search);
const query = params.get('search');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = movieName.value.trim();
    window.location.href = `search-result.html?search=${encodeURIComponent(search)}`
});

document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=f2cd525f&s=${encodeURIComponent(query)}`)
    const result = await res.json()
    console.log(result)
    document.getElementById("main-content").innerHTML = "";

    if (result.Response === "False") {
        document.getElementById("main-content").innerHTML = ` 
        <section class="text-center justify-self-center w-4/5 mt-10 text-gray-700">  
            <p>Unable to find what you're looking for. Please try another search.</p>
        </section>`
    } 

    // Display Search Results
    let searchResult = result.Search
    searchResult.forEach(arr => {
        const movieDisplay = renderMovies(arr)
        document.getElementById("main-content").appendChild(movieDisplay)
    });            
    storeIDs()   
});
    
function storeIDs() {
    let idArr = JSON.parse(localStorage.getItem("films")) || []

    document.querySelectorAll('.watchlist-btn').forEach((btn) => {
        btn.addEventListener("click", () => {

            if (!idArr.includes(btn.getAttribute("data-value"))) {
                idArr.push(btn.getAttribute("data-value"))
                localStorage.setItem("films", JSON.stringify(idArr))
            }
        }) 
    })
}
