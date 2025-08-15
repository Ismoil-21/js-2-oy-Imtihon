

let form = document.getElementById("form");
let search = document.getElementById("search");
let select = document.getElementById("select");
let slc = document.getElementById("slc");
let parent = document.getElementById("parent");
let btn = document.getElementById("btn");

renderMovies(movies);

function renderMovies(data) {
    parent.innerHTML = '';

    data.forEach((item, index) => {
        let div = document.createElement('div');
        div.classList.add('movies-card');
        div.innerHTML = `
                    <div class="rasm">
                        <img width="100%" src="./images/1200x675mf.jpg.png" alt="">
                    </div>
                    <div class="text">
                        <h2>${item.Title}</h2>
                    </div>
                    <p>${item.imdb_rating} ${item.movie_year} ${item.Categories}</p>
                    <div class="bos">
                        <button class="buton">More info</button>
                    </div>
        `
        parent.appendChild(div);
    });
};


select.addEventListener('change', function(e) {

    let sortedMovies = [...movies];

    if(e.target.value === 'A-Z') {
        sortedMovies.sort((a, b) => {
            return a.Title.localeCompare(b.Title)
        });
    } else if(e.target.value === 'Z-A') {
        sortedMovies.sort((a, b) => {
            return b.Title.localeCompare(a.Title)
        });
    }

    renderMovies(sortedMovies);
});

slc.addEventListener('change', function (s) {
    let sortedMovies = [...movies];

     let sortCategory =   sortedMovies.filter((item)=>{
            return s.target.value === "All" ? sortedMovies : item.Categories.includes(s.target.value)
        })
        renderMovies(sortCategory)


})

btn.addEventListener('click', function (e) {

    let oneData = movies.filter((item)=>{
        return item.Title === search.value
    })

    renderMovies(oneData)

});