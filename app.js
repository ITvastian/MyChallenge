var btn = document.getElementById("myBtn");
var modal = document.getElementById("myModal");
const botones = document.querySelectorAll("#btn2, #send, #btn3");
const description = document.querySelector(".suscription");

function validarFormulario(event) {
  event.preventDefault();
  var usuario = document.forms["miForm"]["nombre"].value;
  var email = document.forms["miForm"]["email"].value;
  var number = document.forms["miForm"]["number"].value;
  var formValido = true;

  if (usuario == null || usuario.trim() === "") {
    document.getElementById("nombre-error").innerHTML = "Ingresa tu nombre";
    formValido = false;
  } else if (usuario.length < 5) {
    document.getElementById("nombre-error").innerHTML = "El nombre debe tener al menos 5 caracteres";
    formValido = false;
  } else {
    document.getElementById("nombre-error").innerHTML = "";
  }

  if (email == null || email.trim() === "") {
    document.getElementById("email-error").innerHTML = "Ingresa tu email";
    formValido = false;
  } else if (!validarEmail(email)) {
    document.getElementById("email-error").innerHTML = "El email no es válido";
    formValido = false;
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  if (number == null || number.trim() === "") {
    document.getElementById("number-error").innerHTML = "Ingresa tu número";
    formValido = false;
  } else if (number.length < 5) {
    document.getElementById("number-error").innerHTML = "El número debe tener al menos 5 caracteres";
    formValido = false;
  } else {
    document.getElementById("number-error").innerHTML = "";
  }

  if (formValido) {
    var formData = {
      nombre: usuario,
      email: email,
      number: number
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    step2Ir();
  }
}

btn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.forms["miForm"].onsubmit = function (event) {
  validarFormulario(event);
};


