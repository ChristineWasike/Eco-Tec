const technicianList = document.querySelector('#technicians-list');
const form = document.querySelector('#search-form');
const temp = document.querySelector('.wrapper');



// // create element & render cafe
// function renderCafe(doc){
//     let li = document.createElement('li');
//     let name = document.createElement('span');
//     let city = document.createElement('span');
//     // let cross = document.createElement('div');

//     li.setAttribute('data-id', doc.id);
//     name.textContent = doc.data().name_of_company;
//     city.textContent = doc.data().city;
//     // cross.textContent = 'x';

//     li.appendChild(name);
//     li.appendChild(city);
//     //li.appendChild(cross);

//     technicianList.appendChild(li);

//     // // deleting data
//     // cross.addEventListener('click', (e) => {
//     //     e.stopPropagation();
//     //     let id = e.target.parentElement.getAttribute('data-id');
//     //     db.collection('technicians_profile').doc(id).delete();
//     // });
// }






function renderCafe(doc){
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    let nameofcompany = document.createElement('h1');
    nameofcompany.className = "nameofcompany";
    nameofcompany.appendChild(document.createTextNode(doc.data().name_of_company));
    let city = document.createElement('p');
    city.className = "city";
    city.appendChild(document.createTextNode(doc.data().city));
    let district = document.createElement('p');
    city.className = "district";
    district.appendChild(document.createTextNode(doc.data().district));
    let contactus = document.createElement('p');
    city.className = "contactus";
    contactus.appendChild(document.createTextNode('Contactus'));
    card.appendChild(nameofcompany);
    card.appendChild(city);
    card.appendChild(district);
    card.appendChild(contactus);
    console.log(card);
    temp.appendChild(card);
    console.log(temp);

 
    // cross.textContent = 'x';

    //li.appendChild(cross);

 

    // // deleting data
    // cross.addEventListener('click', (e) => {
    //     e.stopPropagation();
    //     let id = e.target.parentElement.getAttribute('data-id');
    //     db.collection('technicians_profile').doc(id).delete();
    // });
}



// getting data

db.collection('technicians_profile').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});

function fetch(){
    var location = document.getElementById("location").value.toLowerCase();
    localStorage.setItem("location_key", location);
    db.collection('technicians_profile').where('city', '==', localStorage.getItem('location_key')).get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            renderCafe(doc);
        });
    });
}




      


    
    
    // console.log("Damn");
    
    








  

