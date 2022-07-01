document.querySelector("form").addEventListener("submit", (event) => {
  let resultado = document.getElementById("msg_reset");
  resultado = "";
  event.preventDefault();
  document.getElementById("msg_reset").classList.remove("d-none");

  /*SI EL DNI ESTA REGISTRADO*/
  if (document.getElementById("input_dni").value == "11111111") {
    /*SI EL DNI YA ESTA EN CURSO*/
    document.getElementById("msg_reset").classList.remove("alert-danger");
    document.getElementById("msg_reset").classList.add("alert-info");
    document.getElementById("ico_aviso").setAttribute("class","bi bi-clock-history h3");
    document.getElementById("mensaje").innerHTML =
      "Usted ya cuenta con una solicitud en proceso, por favor espere a que termine el proceso de atención.";
  } 
  else if (document.getElementById("input_dni").value == "22222222") {
    document.getElementById("msg_reset").classList.remove("alert-info");
    document.getElementById("msg_reset").classList.remove("alert-danger");
    document.getElementById("msg_reset").classList.add("alert-success");
    document.getElementById("ico_aviso").setAttribute("class","bi bi-check2-circle h3");
    document.getElementById("mensaje").innerHTML =
      "¡Solicitud exitosa!<br> En un plazo máximo de 48 horas recibirá sus credenciales en su correo USMP.";
  }
  else {
    document.getElementById("msg_reset").classList.remove("alert-info");
    document.getElementById("msg_reset").classList.add("alert-danger");
    document.getElementById("ico_aviso").setAttribute("class","bi bi-info-circle h3");
    document.getElementById("mensaje").innerHTML =
      "Sus datos no se encuentran registrados en el sistema, comuníquese al correo <a class='link_mail' href='mailto:soporte_fcctp@usmp.pe'>soporte_fcctp@usmp.pe</a>";
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
