
const movies = document.querySelector('.movies')


db.collection('sictoms')
.get().then(snapshoot=> {
    snapshoot.docs.forEach((doc) => {
        console.log(doc.data())
let output = '';
output += `
<div>
<p> ${doc.data().name}</p>
<div>
`
movies.innerHTML =output
    })
 
})


// const getResults = (doc)=>{
// //console.log(doc.data());
// let  output='';
// output +=`
//  <div>
//  <p>${doc.data().name}</p>
//  </div>
// `

// movies.innerHTML=output
//}