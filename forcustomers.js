const technicianList = document.querySelector('#technicians-list');
const form = document.querySelector('#search-form');




// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);

    technicianList.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('technicians_profile').doc(id).delete();
    });
}



// getting data

function fetch(){
    var location = document.getElementById("location").value;
    localStorage.setItem("location_key", location);

}

db.collection('technicians_profile').where('city', '==', localStorage.getItem('location_key')).get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});


      


    
    
    // console.log("Damn");
    
    








  
