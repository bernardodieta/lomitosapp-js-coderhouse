const btn = document.getElementById('submit');

let stat = false;
tempstorlist = [];
btn.addEventListener('click', function (e) {
  let datosuser = JSON.parse(sessionStorage.getItem("Login")) || [];
  let tmpuser = document.getElementById('username').value;
  let tmppass = document.getElementById('password').value;
  e.preventDefault();

  for (const objeto of datosuser) {
    tempstorlist.push(new Logins(objeto));
   
  }
  for (const refu of tempstorlist) {
    let getpass = refu.password;
   
    if (tmppass === getpass){
      console.log('password correcta');
      stat = true;
      sessionStorage.setItem('status', stat);
      location.href = '../index.html';

    }else{
      console.log('password Incorrecta');
    }
  }






})


// if (tmppass === pass) {
//   stat = true;
//   insert = sessionStorage.setItem('status', stat);
// }else{
//   console.log("error");
// }