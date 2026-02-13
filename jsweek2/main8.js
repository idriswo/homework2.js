let users = JSON.parse(localStorage.getItem("date")) || []

let box = document.querySelector(".box")
let Form = document.querySelector(".Form")





Form.onsubmit = (event) => {
    event.preventDefault();
    let obj = {
        id: Date.now(),
        name: Form["name"].value,
        job: Form["job"].value,
    }
    
    users.push(obj)
    localStorage.setItem("date", JSON.stringify(users))
    Form.reset()
    showUser()
}


function deleteUser(id) {
    users = users.filter((e) => e.id != id)
    localStorage.setItem("date", JSON.stringify(users))
    showUser()
}


function EditUser(e) {
    Form["name"].value = e.name
    Form["job"].value = e.job
    btnEdit.innerHTML = "Edit"
  
}

function showUser() {
    box.innerHTML = ""
    users.forEach((e, i) => {
        let tr = document.createElement("tr")
        let tdID = document.createElement("td")
        let tdName = document.createElement("td")
        let tdJob = document.createElement("td")
        let tdStatus = document.createElement("td")
        let tdActions = document.createElement("td")
        let td = document.createElement("td")
        let btnDelete = document.createElement("button")
        let btnEdit = document.createElement("button")

        btnDelete.innerHTML = "delete"
        btnEdit.innerHTML = "edit"
        tdID.innerHTML = i + 1
        tdName.innerHTML = e.name
        tdJob.innerHTML = e.job
        tdStatus.innerHTML = e.status ? "Active" : "inActive"

        btnDelete.onclick = () => {
            deleteUser(e.id)
        }
        btnEdit.onclick = () => {
            EditUser(e)
        }
        tdActions.append(btnDelete, btnEdit)
        tr.append(tdID, tdName, tdJob, tdStatus, tdActions)
     });

}

showUser()
