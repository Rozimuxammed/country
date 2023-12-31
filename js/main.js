const country = "https://restcountries.com/v3.1/all"
const cards = document.querySelector(".cards")
const select = document.querySelector("select")
const input = document.querySelector("input")
const body = document.querySelector("body")
const mode = document.querySelector(".mode")
const loader = document.querySelector(".loader")
var datas
mode.addEventListener("click", () => {
    body.classList.toggle("night")
})
const getData = async (api) => {
    loader.classList.add("active")
    const res = await fetch(api)
    const data = await res.json()
    datas = data

    NewCountry(datas)
    loader.classList.remove("active")
}
getData(country)

const NewCountry = (productes) => {
    cards.innerHTML = ""
    productes.forEach((item) => {
        cards.innerHTML += ` <div class="card">
        <a href="./index2.html?name=${item.name.common}">
        <img src="  ${item.flags.png}" alt="This is image">
        <h1>Name:  ${item.name.common}</h1>
        </a>
        <h3>Population:  ${item.population}</h3>
        <h3>Region:  ${item.region}</h3>
        <h3>Capital:  ${item.capital}</h3>
    </div>`
    })
}

select.addEventListener("change", () => {
    const selectValue = select.value
    if (selectValue == "All") {
        NewCountry(datas)
    } else {
        const newdata = datas.filter((item) => {
            return item.region == selectValue
        })
        NewCountry(newdata)
    }
})

input.addEventListener("input", (e) => {
    var search = e.target.value.replace(/\s/g, "").toLowerCase()
    const InputSearch = datas.filter((item) => {
        return item.name.common.toLowerCase().includes(search)
    })
    NewCountry(InputSearch)
})


