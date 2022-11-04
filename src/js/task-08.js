const form = document.querySelector('.login-form')
form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formElem = event.currentTarget.elements;
    console.log(formElem)

    if (formElem.email.value === '' || formElem.password.value === '') {
        return alert('Усі поля повинні бути заповнені')
    }

    const email = formElem.email.value;
    const password = formElem.password.value;

    const formData = {
        email,
        password,
    }
    console.log(formData)
    event.currentTarget.reset()
}
