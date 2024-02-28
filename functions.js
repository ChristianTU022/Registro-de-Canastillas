function siguiente() {
  var canastillas = document.getElementById("canastillas").value;
  if (canastillas === "lavadas") {
    document.getElementById("fechaSection").style.display = "none";
    document.getElementById("nombreSection").style.display = "none";
    document.getElementById("canastillasSection").style.display = "none";
    // Aquí podrías mostrar el siguiente apartado para las canastillas lavadas
    // Por ejemplo: document.getElementById("lavadasSection").style.display = "block";
  } else if (canastillas === "rotas") {
    // Manejar la lógica para las canastillas rotas
  }
}
