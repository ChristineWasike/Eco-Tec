const form = document.querySelector('#registration-form');

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('technicians_profile').add({
        name_of_company: form.name_of_company.value,
        district: form.district.value,
        city: form.city.value,
        phone: form.phone.value
    });
    form.name_of_company.value = '';
    form.district.value = '';
    form.city.value = '';
    form.phone.value = '';
});

