
// let btn = document.querySelector(".btn")
// let allbtn = document.querySelectorAll(".btn")

// allbtn.forEach((el, i)=>{
//      el.innerHTML  = "ON" +(i+1)
//      el.style.backgroundColor = "red"
//      el.style.color = "white"
//      el.onclick = ()=>{
//         if(el.innerHTML == ("ON"+(i+1))) {
//             el.innerHTML = ("OFF"+(i+1))
//         }
//         else{
//             el.innerHTML = ("ON"+(i+1))
//         }
//      }
// })

// let abc = document.querySelector(".abc")
// let h1 = document.createElement("h1")
// h1.innerHTML  = "Hello World"
// abc.append(h1)

















let box = document.querySelector(".box")
let btn = document.createElement("button")
btn.classList.add("add")

let img = document.createElement("img")
img.src = "./lamp1.png"


btn.innerHTML = "ON"
btn.style.color = "white"
btn.style.backgroundColor = "blue"

btn.onclick = ()=>{

    if(btn.innerHTML == "ON"){
        img.src = "./lamp.png"
        btn.innerHTML = "OFF"
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
    }    
    else{
        img.src = "./lamp1.png"
        btn.innerHTML = "ON"
        btn.style.color = "white"
        btn.style.backgroundColor = "blue"
    }    
}    


box.append(img,btn)
