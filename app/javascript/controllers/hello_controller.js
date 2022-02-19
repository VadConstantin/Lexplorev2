import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    console.log("HOME JS controller!")

    const nav = document.querySelector(".navbar-lewagon")
    const logo = document.querySelector(".nav-link")
    const links = document.querySelectorAll(".link")
    const card1 = document.querySelector(".card-1")
    const card2 = document.querySelector(".card-2")
    const card3 = document.querySelector(".card-3")
    const dessinPropos = document.querySelector(".dessin-propos")
    const propos = document.querySelector(".propos")
    const dessinProgramme = document.querySelector(".dessin-programme")
    const cardProgramme = document.querySelector(".card-programme")
    const cardAccompagnement = document.querySelector(".card-accompagnement")
    const cardCoaching = document.querySelector(".coaching-card")
    const lexplore = document.querySelector("#lexplore")
    const cardTem = document.querySelector(".cards-tem")
    const cardsTemItem = document.querySelectorAll(".card-tem-1")
    const programTitle = document.querySelector(".programme-title")
    const lexploreFooter = document.querySelector("#lexplore-footer")

    // SCROLL FOR NAVBAR
    window.addEventListener("scroll", () => {
      console.log(window.scrollY)
      if (window.scrollY > 100 && window.scrollY < 610 ) {
        lexplore.innerText = ""
        nav.style = "background: transparent; box-shadow: 0 0 0px rgba(0,0,0,0);"
        logo.style = "color: transparent; color: white;"
        links.forEach((link) => {
          link.style = "opacity: 0"
        })
         } else if (window.scrollY > 609) {
        lexplore.innerText = "L"
        lexploreFooter.style = "color: white"
        nav.style = "background: white"
        logo.style = "opacity: 1; color: rgb(8, 31, 61)"
        links.forEach((link) => {
          link.style = "opacity: 1; color: rgb(8, 31, 61)"
        })
       } else {
        lexplore.innerText = "LEXPLORE"
        nav.style = "background: #FF6370"
        logo.style = "opacity: 1; color: white;"
        links.forEach((link) => {
          link.style = "opacity: 1; color: white"
        })
      }
    })

    // SCROLL FOR CARDS
    window.addEventListener("scroll", () => {
      if (window.scrollY < 240 || window.scrollY > 1600) {
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
      } else if (window.scrollY > 1850) {
        propos.style = "opacity: 1;"
        dessinPropos.style = "opacity: 1"
      } else {
        dessinPropos.style = "top: 0px; position: relative;"
        propos.style = "top: 0px; position: relative;"
      }
    })

    // SCROLL FOR PROGRAM
    window.addEventListener("scroll", () => {
      if (window.scrollY < 1800) {
        dessinProgramme.style = "position: absolute; right: 1370px;"
        cardProgramme.style = "position: absolute; left: 1460px;"
        programTitle.style = "opacity: 0; color: rgb(255,98,112)"
      } else {
        dessinProgramme.style = "position: relative; right: 0px;"
        if (window.screen.width < 1400) {
            cardProgramme.style = "position: absolute; left: 400px;"
            programTitle.style = "top: -6px; left: 630px; opacity: 1; color: rgb(255,98,112)"
          } else {
            cardProgramme.style = "position: absolute; left: 580px;"
            programTitle.style = "opacity: 1; color: rgb(255,98,112)"
          }
      }
    })

    //SCROLL FOR ACCOMPAGNEMENT
    window.addEventListener("scroll", () => {
      if (window.scrollY < 1400 || window.scrollY > 2500) {
        cardAccompagnement.style = ""
      } else {
        cardAccompagnement.style = ""
      }

    })

    // SCROLL FOR COACHING
    window.addEventListener("scroll", ()=> {
      if (window.scrollY < 2550) {
        cardCoaching.style = "opacity: 0"
      } else {
        cardCoaching.style = "opacity: 1"
      }
    })

    //SCROLL FOR TEMOIGNAGES
    window.addEventListener("scroll", () => {
      if (window.scrollY < 3400) {
        cardTem.style = "opacity: 0; position: absolute; top: 600px;"
      } else {
        cardTem.style = "opacity: 1; position: relative; top: 0px"
      }
    })


  }
}
