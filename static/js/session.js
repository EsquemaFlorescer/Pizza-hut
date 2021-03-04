const $ = document.querySelector.bind(document)

function getLoggedUser() {
  if(localStorage.getItem("userName") == null) {
    $("#login").style.display = "block"
    $("#register").style.display = "block"
    
    $("#logout").style.display = "none"
    $(".user-pic").style.display = "none"
    $("#right p").style.display = "none"
  } else {

    $("#login").style.display = "none"
    $("#register").style.display = "none"
    
    $("#logout").style.display = "block"
    $(".user-pic").style.display = "block"
    $("#right p").style.display = "block"
    
    $("#right p strong").innerHTML = `${localStorage.getItem("userName")}`
  }
}

if(localStorage.getItem("auth") == "true") {
  getLoggedUser()
}

$("#logout").addEventListener("click", () => {
  localStorage.clear()
  window.location.href = "http://127.0.0.1:5500/index.html"
})

export { getLoggedUser }