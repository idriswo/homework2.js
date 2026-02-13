// let users = [
//     {
//         id: 1,
//         image: "./image.png",
//         p1: "Softclub Academy",
//         h1: "Idris",
//         h2: "Irgashev",
//         h3: "manager",

// const { use } = require("react");

//     },
//     {
//         id: 2,
//         image: "./image.png",
//         p1: "Softclub Academy",
//         h1: "Idris",
//         h2: "Irgashev",
//         h3: "manager",

//     },
//     {
//         id: 3,
//         image: "./image.png",
//         p1: "Softclub Academy",
//         h1: "Idris",
//         h2: "Irgashev",
//         h3: "manager",

//     }
// ]
// let box = document.querySelector(".box")
// let box1 = document.querySelector(".box1")

// function deleteUsers(id) {
//     users = users.filter((e) => e.id != id)
//     showUser()
// }


// function showUser() {
//     box.innerHTML = "";
//     users.forEach((e) => {

//         let boxt = document.createElement("div")
//         let image = document.createElement("img")
//         let p1 = document.createElement("p")
//         let h1 = document.createElement("h1")
//         let h2 = document.createElement("h1")
//         let h3 = document.createElement("h3")
//         let btn = document.createElement("button")
//         btn.onclick = () => {
//             deleteUsers(e.id)
//         }
//         image.src = e.image
//         p1.innerHTML = e.h3
//         h2.innerHTML = e.h2
//         h1.innerHTML = e.h1
//         h3.innerHTML = e.h3
//         btn.innerHTML = ""

//         h2.classList.add("aa1")
//         h1.classList.add("aa1")
//         boxt.classList.add("boxt")
//         boxt.append(image, p1, h1, h2, h3, btn)
//         box1.append(boxt)
//         box.append(box1)
//     });

// }


// showUser()




let users = [
    {
        id: 1,
        image: "./image1.png",
        name: "Idris",
        company: "Barcelona Academy",
        job: "Footballer",
        status : "true",
    },
    {
        id: 2,
        image: "./image1.png",
        name: "Abdullo",
        company: "Barcelona Academy",
        job: "Footballer",
        status : "true",
    },
    {
        id: 3,
        image: "./image1.png",
        name: "Muhammad",
        company: "Barcelona Academy",
        job: "Footballer",
        status : "false",
    }
]

let box = document.querySelector(".box")
let AddForm = document.querySelector(".AddForm")

AddForm.onsubmit = (e) =>{
    e.preventDefault();
    let newObj = {
        id : users.length+1,
        image : AddForm["image"].value,
        name : AddForm["name"].value,
        company : AddForm["company"].value,
        job : AddForm["job"].value,
    }
    users.push(newObj)
    AddForm.reset()
    ShowUser()
}


function deleteUser(id) {
    users = users.filter((e) => e.id != id)
    ShowUser()
}


function checkuser(id){
    users = users.map((user)=>{
        if(user.id == id){
            user.status =! user.status
        }
        return user
    });
    ShowUser()
}


function ShowUser() {
    box.innerHTML = ""
    users.forEach((e) => {
        let div = document.createElement("div")
        let divb = document.createElement("div")
        let image = document.createElement("img")
        let h1 = document.createElement("h1")
        let pt = document.createElement("p")
        let pS = document.createElement("p")
        let pb = document.createElement("p")
        let btn = document.createElement("button")
        let checkbox = document.createElement("input")
        checkbox.innerHTML = "checkbox"
        checkbox.type = "checkbox"        
        checkbox.checked = e.status        
        

        btn.innerHTML = "🗑️"
        btn.onclick = (e) => {
            deleteUser(e.id)
        }
        pS.onchange  = (e)=>{
            checkuser(e.id)
        }
        image.src = e.image
        h1.innerHTML = e.name
        pt.innerHTML = e.company
        pb.innerHTML = e.job
        div.classList.add("div")

        divb.append(pt,pS, h1, pb, btn,checkbox)
        div.append(image, divb)
        box.append(div)
    })
}
ShowUser()