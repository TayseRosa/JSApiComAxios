//let renderResults = document.querySelector('#renderResults');

const url = "http://localhost:5500/api";
const newUser = {
    name: "Olivia Palito",
    //avatar: "https://avatars.githubusercontent.com/u/31596454?s=96&v=4",
    avatar: "http://lorempixel.com/400/200/",
    city: "Rio do Sul"
}

const UpdateUser = {
    name: "Tayse Rosa",
    avatar: "https://avatars.githubusercontent.com/u/31596454?s=96&v=4",
    city: "Porto Alegre"
}

function getUser(){
    axios.get(url)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error=>console.log(error))
}

//getUser();

function addNewUser(){
    axios.post(url, newUser)
    .then(response=>{
        alert(JSON.stringify(response.data))
    })
    .catch(error=> console.log(error))
}

//addNewUser();

function updateUser(){
    axios.put(`${url}/1`, UpdateUser)
    .then(response=>{
        alert(JSON.stringify(response.data))
    })
    .catch(error=>console.log(error))
}
//updateUser();

function deleteUser(){
    axios.delete(`${url}/14`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error=>console.log(error))
}

//deleteUser();

function getOneUser(){
    axios.get(`${url}/1`)
    .then(response=>{
        const data = response.data
        renderResults.textContent = JSON.stringify(data)    

        document.querySelector('#inputNumber').value = data.id
        document.querySelector('#inputName').value = data.name
        let img = data.avatar
        document.querySelector('#inputImg').setAttribute('src', img)
        document.querySelector('#inputCity').value = data.city

    })
    .catch(error => console.log(error))
}

getOneUser();