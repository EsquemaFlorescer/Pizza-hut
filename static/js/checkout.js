import { getLoggedUser } from "./session.js"

getLoggedUser()

const $ = document.querySelector.bind(document)

const pizzas = [
  {
    "name": "peperonni",
    "value": 23,
    "qtd": 1
  },
  {
    "name": "musarela",
    "value": 22,
    "qtd": 2
  },
  {
    "name": "4 queijos",
    "value": 2345,
    "qtd": 1
  },
]
let output = ``
let total = 0

pizzas.forEach(pizza => {
  output += JSON.stringify({
    "name": pizza.name,
    "value": pizza.value,
    "qtd": pizza.qtd
  })
  localStorage.setItem("order", output)

  $("#cart table tbody").innerHTML += `
    <tr>
      <th>${pizza.qtd}</th>
      <th>${pizza.name}</th>
      <th>R$ ${pizza.value}</th>
      <th><img src="/static/assets/minus.svg" alt="remover item"></th>
    </tr>
  `
  total += pizza.value
})
$("#cart table tbody").innerHTML += `
  <tr id="#total">
    <th></th>
    <th><strong>Total</strong></th>
    <th>R$ ${total}</th>
    <th></th>
  </tr>
`

$("#cardInfo form").addEventListener("submit", async e => {
  e.preventDefault()

  const creditcardNumber = e.target[0].value
  const creditcardExpiration = e.target[1].value
  const creditcardSecurity = e.target[2].value
  const creditcardName = e.target[3].value


  async function createCreditcard() {
    const response = await fetch("http://localhost:3333/creditcard", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "creditcardNumber": creditcardNumber,
        "creditcardSecurity": creditcardSecurity,
        "creditcardName": creditcardName,
        "creditcardExpiration": creditcardExpiration
      })
    })

    const data = await response.json()
    createOrder(data)
  }

  createCreditcard()

  async function createOrder(data) {
    const response = await fetch("http://localhost:3333/order", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "creditcard": data,
        "users": localStorage.getItem("userID"),
      })
    })

    const data2 = await response.json()
    console.log(data2)
  }

})