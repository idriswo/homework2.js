let box = document.querySelector(".box")

box.classList.add("box")

let body = document.querySelector("body")
body.style.backgroundColor = "white"

let pdf = document.querySelector(".pdf")
let h1 = document.querySelector(".h1")

let btn = document.querySelector(".btn")


btn.onclick = () => {
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "green"
        pdf.innerHTML = "green"
    }
    else if (body.style.backgroundColor == "green") {
        body.style.backgroundColor = "darkgoldenrod"
        pdf.innerHTML = "darkgoldenrod"
    }
    else if (body.style.backgroundColor == "darkgoldenrod") {
        body.style.backgroundColor = "black"
        pdf.innerHTML = "black"
        pdf.style.color = "white"
        h1.style.color = "white"

    }
    else if (body.style.backgroundColor == "black") {
        body.style.backgroundColor = "blue"
        pdf.innerHTML = "blue"

    }
    else if (body.style.backgroundColor == "blue") {
        body.style.backgroundColor = "orange"
        pdf.innerHTML = "orange"

    }
    else if (body.style.backgroundColor == "orange") {
        body.style.backgroundColor = "white"
        pdf.innerHTML = "white"
        pdf.style.color = "black"
        h1.style.color = "black"
    }

}
