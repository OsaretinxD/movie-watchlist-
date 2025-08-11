export function renderMovies(data) {
    const container = document.createElement('div');
    container.innerHTML = 
                `
                    <section class="movie-section flex gap-x-4 px-4 py-2 pb-4 border-b-2 border-gray-700">
                        <div class="h-full w-2/6 overflow-hidden">
                            <img src="${data.Poster}" class="h-37 w-full rounded-sm object-contain">
                        </div>   

                        <div class="flex flex-col gap-y-2 w-5/6 pt-3">
                            <div class="flex gap-x-2 items-baseline">
                                <h2 class="text-md">${data.Title}</h2>
                                <i class="fa-solid fa-star text-xs text-yellow-500"></i>
                                <p class="text-xs" id="movie-rating">${data.imdbRating}</p>
                            </div>
                            <div class="flex gap-x-4 text-xs">
                                <p>${data.Runtime}</p>
                                <p>${data.Year}</p>
                                <div class="watchlist-btn flex items-center gap-x-2 cursor-pontier hover:text-gray-700" data-value=${data.imdbID}>
                                    <i class="fas fa-plus-circle icon cursor-pointer"></i>
                                    <a href="#">Watchlist</a>
                                </div>

                            </div>
                            <p class="line-clamp-3 text-sm text-gray-400 leading-6">${data.Plot}</p>
                        </div>
                    </section>`
    return container
}
