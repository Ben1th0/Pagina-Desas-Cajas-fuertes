const seccionInfo = document.getElementById("informacioncaja");
document.getElementById('formularioCF').addEventListener('submit', function(event) {

    event.preventDefault();
    
    // tipo de caja fuerte
    var tipo = document.getElementsByName('tipo');
    var tiposeleccionado = '';
  
    for (var i = 0; i < tipo.length; i++) {
      if (tipo[i].checked) {
        tiposeleccionado = tipo[i].value;
        break;
      }
    }

    // cerradura
    var cerradura = document.getElementsByName('subtipo');
    var cerraduraseleccionada = '';
  
    for (var i = 0; i < cerradura.length; i++) {
      if (cerradura[i].checked) {
        cerraduraseleccionada = cerradura[i].value;
        break;
      }
    }

    // color
    var color = document.getElementsByName('color');
    var colorseleccionado = '';
  
    for (var i = 0; i < color.length; i++) {
      if (color[i].checked) {
        colorseleccionado = color[i].value;
        break;
      }
    }

    seccionInfo.innerHTML = '';
    
    // Crear la estructura HTML dinámicamente
    var nuevaEstructura = document.createElement('div');
    nuevaEstructura.classList.add('descripcion');

    var titulo = document.createElement('h3');
    titulo.classList.add('tituloDs');
    titulo.textContent = 'Tu Caja fuerte';

    var parrafo1 = document.createElement('p');
    parrafo1.classList.add('infoDS');
    parrafo1.innerHTML = `<b>Caja fuerte tipo 1:</b> ${tiposeleccionado}`;

    var parrafo2 = document.createElement('p');
    parrafo2.classList.add('infoDS');
    parrafo2.innerHTML = `<b>Cerradura:</b> ${cerraduraseleccionada}`;

    var parrafo3 = document.createElement('p');
    parrafo3.classList.add('infoDS');
    parrafo3.innerHTML = `<b>Color:</b> ${colorseleccionado}`;

    nuevaEstructura.appendChild(titulo);
    nuevaEstructura.appendChild(parrafo1);
    nuevaEstructura.appendChild(parrafo2);
    nuevaEstructura.appendChild(parrafo3);

    seccionInfo.appendChild(nuevaEstructura);
});


