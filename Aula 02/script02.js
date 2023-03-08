  setInterval(horario, 1000);
  function horario(){
    var horaAgora = new Date();
    var tempo = horaAgora.toLocaleTimeString();
    document.getElementById("hora").innerHTML = tempo;
  }    