const dogImagediv=document.getElementById('dogImage')
const dogButton=document.getElementById('dogButton')
// function GetImage(){
//  fetch('https://dog.ceo/api/breeds/image/random')
// .then( response => response.json()  ).then(json=>{
//    dogImagediv.innerHTML= `<img src='${json.message}' height=300 width=300/>`
   

// } )}

//or

const getBtn=()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then( response => response.json()).then(json=>{
       dogImagediv.innerHTML= `<img src='${json.message}' height=300 width=300/>`
       
})}
dogButton.onclick=()=> getBtn()