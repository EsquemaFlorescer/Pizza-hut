import { getLoggedUser } from "./session.js"

getLoggedUser()

const $ = document.querySelector.bind(document)

async function getBackendData(url) {
  const response = await fetch(url)
  
  const data = await response.json()
  createCards(data)
  console.log(data)
}

function createCards(data) {
  let output = ``
  
  data.forEach(post => {
    output += `
      <div class="card">
        <div class="background"></div>
        <h2>${post.itemName}</h2>
        <p>${post.itemDescription}</p>
        <small><strong>R$ ${post.itemValue}</strong></small>
      </div>
    ` 
  })

  $("#pizzas .items").innerHTML = output
  $("#sobremesas .items").innerHTML = output
}

getBackendData("http://localhost:3333/item")

async function getRestaurant() {
  const response = await fetch("http://localhost:3333/restaurant")
  const data = await response.json()
  let id

  const restaurantName = data[0].restaurantName
  $("#restaurant").innerHTML = restaurantName

  const id_city = data[0].id_city
  getCity(id_city)
}

async function getCity(id_city) {
  const response = await fetch("http://localhost:3333/city")
  const data = await response.json()
  data.forEach(city => {
    if(city.id_city == id_city) {
      $("#city").innerHTML = city.cityName
    }
  })
}



getRestaurant()