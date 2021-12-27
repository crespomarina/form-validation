const all = document.addEventListener('click', (e) => {
  console.log(e.target);
})

//form blur event listeners
document.getElementById('name').addEventListener('blur',
validateName);
document.getElementById('cp').addEventListener('blur',
validateCp);
document.getElementById('email').addEventListener('blur',
validateEmail);
document.getElementById('phone').addEventListener('blur',
validatePhone);

//create functions
function validateName() {
  const myName = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(myName.value)){
    myName.classList.add('is-invalid');
  } else {
    myName.classList.remove('is-invalid');
  }
}

function validateCp(){
  const myCP = document.getElementById('cp');
  const re = /[0-9]{4}/;

  if(!re.test(myCP.value)){
    myCP.classList.add('is-invalid');
  } else {
    myCP.classList.remove('is-invalid');
  }
}

function validateEmail(){
  const myEmail = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(myEmail.value)){
    myEmail.classList.add('is-invalid');
  } else {
    myEmail.classList.remove('is-invalid');
  }
}

function validatePhone(){
  const myPhone = document.getElementById('phone');
  // const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  const re = /^\d{3,5}[-. ]?\d{7,10}$/;

  if(!re.test(myPhone.value)){
    myPhone.classList.add('is-invalid');
  } else {
    myPhone.classList.remove('is-invalid');
  }
}