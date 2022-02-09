// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    console.log("Hello, Stimulus!")

    const nav = document.querySelector(".navbar-lewagon")
    const logo = document.querySelector(".nav-link")
    const links = document.querySelectorAll(".dropdown-item")

    console.log(links)

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

  }


}
