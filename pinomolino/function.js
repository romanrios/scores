let jsonFilePath = 'puntajes.json';
let tablaPuntajes = document.getElementById('tablaPuntajes');
let puesto = 1;

// Realiza la solicitud HTTP para obtener el JSON
fetch(jsonFilePath)
  .then(response => response.json())
  .then(data => {
    // Ordena los puntajes de mayor a menor
    let puntajesOrdenados = Object.values(data.puntajes).sort(function (a, b) {
      return parseInt(b.puntaje) - parseInt(a.puntaje);
    });

    // Itera sobre los puntajes ordenados y agrega filas a la tabla
    puntajesOrdenados.forEach(function (puntaje) {
      let nombre = puntaje.nombre;
      let puntajeValor = puntaje.puntaje;

      // Crea una nueva fila
      let newRow = document.createElement('tr');

      // Agrega celdas con nombre y puntaje
      newRow.innerHTML = '<td class="left">' + puesto + '</td><td class="center">' + nombre + '</td><td class="right">' + puntajeValor + '</td>';

      // Agrega la fila a la tabla
      tablaPuntajes.appendChild(newRow);

      ++puesto;
    });
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));