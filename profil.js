function showForm() {
  var objek = document.getElementById('c-Myform');
  objek.classList.remove('hideForm');
}

function formSubmit() {
  let name = document.getElementById('fname').value;
  let role = document.getElementById('frole').value;
  let availability = document.getElementById('favailability').value;
  let age = document.getElementById('fage').value;
  let location = document.getElementById('flocation').value;
  let number = document.getElementById('fyear-experience').value;
  let email = document.getElementById('femail').value;

  document.getElementById('value-nama').innerHTML = name;
  document.getElementById('value-role').innerHTML = role;
  document.getElementById('value-availability').innerHTML = availability;
  document.getElementById('value-age').innerHTML = age;
  document.getElementById('value-location').innerHTML = location;
  document.getElementById('value-year-experience').innerHTML = number;
  document.getElementById('value-email').innerHTML = email;
}
