const form = document.querySelector('#registration-form');

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('technicians_profile').add({
        name_of_company: form.name_of_company.value.toLowerCase(),
        district: form.district.value.toLowerCase(),
        city: form.city.value.toLowerCase(),
        phone: form.phone.value.toLowerCase()
    });
    form.name_of_company.value = '';
    form.district.value = '';
    form.city.value = '';
    form.phone.value = '';
});

