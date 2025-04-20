const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', handleFormElemSubmit);

function handleFormElemSubmit(e) {
    e.preventDefault();

    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }
    
    const data = {
        email,
        password,
    };
    
    console.log(data);
    e.target.reset();
}
