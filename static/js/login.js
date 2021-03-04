import { getLoggedUser } from "./session.js"

getLoggedUser()

const $ = document.querySelector.bind(document)

$(".modal form").addEventListener("submit", async e => {
  e.preventDefault()

  const email = e.target[0].value
  const password = e.target[1].value

  const response = await fetch("http://localhost:3333", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  })

  const data = await response.json()
  console.log(data)

  if(data.auth == false) {
    alert("Confira seus dados")
  } else if(data.auth == true) {
    localStorage.setItem("auth", true)
    localStorage.setItem("userName", data.userName)
    localStorage.setItem("userID", data.userID)

    window.location.href = "http://127.0.0.1:5500/index.html"
  }
})