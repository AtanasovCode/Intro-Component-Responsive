document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("form-registration").onsubmit = (e) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const mail = e.target[2].value;
    const password = e.target[3].value;

    if(firstName === '' || firstName.trim() === '') {
      document.getElementsByClassName('input')[0].className='input error';
    } else {
      document.getElementsByClassName('input')[0].className= 'input';
    }

    if(lastName === '' || lastName.trim() === '') {
      document.getElementsByClassName('input')[1].className='input error';
    } else {
      document.getElementsByClassName("input")[1].className= "input";
    }

    if(mail === '' || mail.trim() === '') {
      document.getElementsByClassName('input')[2].className='input error';
      document.getElementsByClassName('email-error')[0].innerHTML = 'Email Address cannot be empty';
    } else if(!validateEmail(mail)) {
      document.getElementsByClassName("input")[2].className="input error";
      document.getElementsByClassName('email-error')[0].innerHTML = 'Looks like this is not a valid email';
    } else {
      document.getElementsByClassName("input")[2].className= "input";
    }

    if(password === '' || password.trim() === '') {
      document.getElementsByClassName("input")[3].className="input error";
      document.getElementsByClassName("password-error")[0].innerHTML = "Password cannot be empty";
    }
    if (password.length < 8) {
      document.getElementsByClassName("input")[3].className= "input error";
      document.getElementsByClassName("password-error")[0].innerHTML = "Password must be at least 8 characters"
    } else if(!validatePassword(password)) {
      document.getElementsByClassName("input")[3].className="input error";
      document.getElementsByClassName("password-error")[0].innerHTML = "Must contain 1 uppercase, 1 lowercase, 1 special character and 1 number";
    } else {
      document.getElementsByClassName("input")[3].className = "input";
    }

  };
});

function validateEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validatePassword(pass) {  //Not Working
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,50}$/.test(pass);
}












