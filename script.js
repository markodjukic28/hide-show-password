let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeicon.addEventListener('click', function () {
  if (password.type === 'password') {
    password.type = 'text';
    eyeicon.src = 'eye-open.png';
  } else {
    password.type = 'password';
    eyeicon.src = 'eye-close.png';
  }
});
