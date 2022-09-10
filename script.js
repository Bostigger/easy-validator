const myForm = document.querySelector('#form');
const message = document.querySelector('#message');

const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

let formValid = false;
let confirm_password=false;

const checkValidation = () => {
    formValid = myForm.checkValidity();
    console.log(formValid);
    if (!formValid) {
        message.textContent = 'Please fill out dates';
        return;
    } else if (password.value !== cpassword.value) {
        confirm_password = false;
        message.textContent = 'Passwords do not match!';
    } else {
        message.textContent = 'Registration successfully';
        message.style.color = 'green';
        return;
    }

}
myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkValidation();
    myForm.reset()
});

