var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10; // Largura inicial da barra
    var duration = 600; // Duração em segundos (10 minutos = 600 segundos)
    var increment = (100 - width) / (duration / 10); // Incremento por intervalo de tempo (10 ms)
    var id = setInterval(frame, 10);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width += increment;
        elem.style.width = width + "%";
        elem.innerHTML = Math.round(width) + "%";
      }
    }
  }
}