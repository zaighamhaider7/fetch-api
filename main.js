
// Set Time Out

// setTimeout (()=>{
//     document.querySelector(".loader").style.display="none"
//  },2000)


// fetch api

let url = "http://universities.hipolabs.com/search?country=United+States"
fetch(url)


.then(Response => Response.json())

.then(data =>{
    console.log(data);

    for(let i=0; i<5;i++){
        document.getElementById("container").innerHTML += `<div class="card">
    <h2>${data[i].name}</h2>
    <h5>${data[i].country}</h5>
    <a href="${data[i].web_pages[0]}">Website Link</a>
</div>`
    }
})

.catch(error =>{
console.log("error",error)
});