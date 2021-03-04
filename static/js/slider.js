const $ = document.querySelector.bind(document)

const html = {
  items: $("#cart"),
  cardInfo: $("#cardInfo")
}

let Counter = 0

function Display(element, state, display) {
  if(state == "show") {
    element.style.display = display
  } else if(state == "hide") {
    element.style.display = "none"
  }
}

$("#front").addEventListener("click", () => {
  Counter += 1

  if(Counter == 1) {
    Display(html.items, "hide")
    Display(html.cardInfo, "show", "flex")
    Display($("#back"), "show", "flex")
    $("#front").innerHTML = "Finalizar a compra"
  } else if(Counter = 2) {
    $("#cardInfo form").submit()
  }
})

$("#back").addEventListener("click", () => {
  Counter -= 1

  if(Counter == 0) {
    Display($("#back"), "hide")
    Display(html.cardInfo, "hide")
    Display(html.items, "show", "flex")
    $("#front").innerHTML = "Próximo &rarr;"
    $("#front").type = "button"
  }
})

$("select").addEventListener("change", () => {
  if($("select").value == 1) {
    $("#cardInfo form").style.display = "none"
  } else if($("select").value == 2 || $("select").value == 3) {
    $("#cardInfo form").style.display = "block"
  }
})

if(Counter == 0) {
  Display($("#back"), "hide")
  Display(html.cardInfo, "hide")
  Display(html.items, "show", "flex")
} else if(Counter == 1) {
  Display(html.items, "hide")
  Display(html.cardInfo, "show", "flex")
  Display($("#back"), "show", "flex")
  $("#front").innerHTML = "Finalizar a compra"
}

export { Counter }