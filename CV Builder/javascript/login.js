const formEl = document.getElementsByTagName('form')
const form = formEl[0]
const loginEl = document.getElementById('login')
// console.log(form)
form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.email.value
    const pass = form.password.value
    if(email && pass){
        if(!validateEmail(email))
            alert("The email provided isn't valid")
        else if(!validatePassword(pass))
            alert("Sorry, the password is incorrect. Try again")
        else
            loginEl.classList.add('disable')
    }
    else{
        alert("Provide data for all the fields")
    }
    // console.log(form.email.value)
    // console.log(form.password.value)
})

const validateEmail = (email) =>{
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
}
const validatePassword = (pass) => {
    const matriculeRegex =  /\bUBa\d{2}\w{1,2}\d{3,4}\b/g;
    return matriculeRegex.test(pass);
}

// const matRx =  /\bUBa\d{2}\w{1,2}\d{3,4}\b/g;
// /\bUBa\d{2}\w{1,2}\d{3,4}\b/g;

