import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    console.log("Hello, Stimulus!")

    const nav = document.querySelector(".navbar-lewagon")
    const logo = document.querySelector(".nav-link")
    const links = document.querySelectorAll(".dropdown-item")
    const card1 = document.querySelector(".card-1")
    const card2 = document.querySelector(".card-2")
    const card3 = document.querySelector(".card-3")
    const dessinPropos = document.querySelector(".dessin-propos")
    const propos = document.querySelector(".propos")
    const dessinProgramme = document.querySelector(".dessin-programme")
    const cardProgramme = document.querySelector(".card-programme")

    // SCROLL FOR NAVBAR
    window.addEventListener("scroll", () => {
      console.log(window.scrollY)
      if (window.scrollY > 100 && window.scrollY < 611 ) {
        nav.style = "background: transparent"
        logo.style = "color: transparent"
        links.forEach((link) => {
          link.style = "opacity: 0"
        })
         }

      else if (window.scrollY > 611) {
        nav.style = "background: rgb(255, 234, 221)"
        logo.style = "opacity: 1"
        links.forEach((link) => {
          link.style = "opacity: 1"
        })
       }

      else {
        nav.style = "background: rgb(255, 234, 221)"
        logo.style = "opacity: 1"
        links.forEach((link) => {
          link.style = "opacity: 1"
        })
      }
    })

    // SCROLL FOR CARDS
    window.addEventListener("scroll", () => {
      if (window.scrollY < 300 || window.scrollY > 1250) {
        card1.style = "position: absolute; left: -600px;"
        card2.style = "position: absolute; top: 600px;"
        card3.style = "position: absolute; right: -600px;"

      } else {
        card1.style = "position: absolute; left: 0px;"
        card3.style = "position: absolute; right: 0px;"
        card2.style = "position: absolute; top: 0px;"
      }
    })

    // SCROLL FOR A PROPOS
    window.addEventListener("scroll", () => {
      if (window.scrollY < 623) {
        propos.style = "top: 500px; position: absolute;"
        dessinPropos.style = "position: absolute; top: 500px"
      } else {
        dessinPropos.style = "top: 0px; position: relative;"
        propos.style = "top: 0px; position: relative;"
      }
    })

    // SCROLL FOR PROGRAM
    window.addEventListener("scroll", () => {
      if (window.scrollY < 1950) {
        dessinProgramme.style = "position: absolute; right: 1370px;"
        cardProgramme.style = "position: absolute; left: 1460px;"
      } else {
        dessinProgramme.style = "position: relative; right: 0px;"
        cardProgramme.style = "position: absolute; left: 580px;"
      }
    })



  }
}
