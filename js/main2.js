const name = new URLSearchParams(location.search).get("name")


const country = `https://restcountries.com/v3.1/name/${name}`

const newcountries = document.querySelector(".newcountries")
const dark_mode = document.querySelector(".dark_mode")
const container = document.querySelector(".container")

const getData = async (api) => {

    const res = await fetch(api)
    const data = await res.json()

    Newdata(data)
}
getData(country)



const Newdata = (cards) => {
    cards.forEach(element => {
        newcountries.innerHTML += `<div class="newcountry">
        <div class="country_image">
            <img src="${element.flags.png}" alt="">
        </div>
        <div class="about_country">
            <h1> ${element.name.common}</h1>
            <h2><span>Population :</span>  ${element.population}</h2>
            <h2><span>Region :</span>  ${element.region} </h2>
            <h2><span>Capital :</span>  ${element.capital}</h2>
            <h2><span>Borders :</span>  ${element.borders}</h2>
            <h2><span>Languages :</span>  ${Object.values(element.languages)}</h2>
        </div>
       </div>`
    });
}
dark_mode.addEventListener("click", () => {
    container.classList.toggle("active")
})