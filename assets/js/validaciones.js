document.querySelector("form").addEventListener("submit", (event) => {
  let resultado = document.getElementById("msg_reset");
  resultado = "";
  event.preventDefault();
  document.getElementById("msg_reset").classList.remove("d-none");

  /*SI EL DNI ESTA REGISTRADO*/
  if (document.getElementById("input_dni").value == "1234567890") {
    /*SI EL DNI YA ESTA EN CURSO*/
    document.getElementById("msg_reset").classList.remove("alert-danger");
    document.getElementById("msg_reset").classList.add("alert-info");
    document.getElementById("mensaje").innerHTML =
      "Ya tiene una solicitud en curso, debe esperar a que se termine el proceso de atencion";
  } else {
    document.getElementById("msg_reset").classList.remove("alert-info");
    document.getElementById("msg_reset").classList.add("alert-danger");
    document.getElementById("mensaje").innerHTML =
      "Sus datos no estan registrados en el sistema, comuniquese con el administrador del sistema al correo soporte@usmp.pe";
  }
  /*console.log("enviando")*/
});

let button = document.getElementById("btn_sap");
let input = document.getElementById("input_dni");
input.value = "";
input.addEventListener("input", function (e) {
  if (input.value.length <= 7) {
    button.disabled = true;
    button.classList.remove("login-btn");
    button.classList.add("login-btn-disabled");
    document.getElementById("msg_reset").classList.add("d-none");
  } else {
    button.disabled = false;
    button.classList.remove("login-btn-disabled");
    button.classList.add("login-btn");
  }
});

function onlyNumberKey(evt) {
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
