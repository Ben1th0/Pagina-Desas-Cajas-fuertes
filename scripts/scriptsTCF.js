const nuevaEstructura = document.getElementById("informacioncaja");
const caja = document.querySelectorAll('.caja');

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

    nuevaEstructura.innerHTML = '';
    
    // Crear la estructura HTML dinámicamente

    var titulo = document.createElement('h3');
    titulo.classList.add('tituloDs');
    titulo.textContent = 'Tu Caja fuerte';

    var parrafo1 = document.createElement('p');
    parrafo1.classList.add('infoDS');
    parrafo1.innerHTML = `<b>Caja fuerte tipo:</b> ${tiposeleccionado}`;

    var parrafo2 = document.createElement('p');
    parrafo2.classList.add('infoDS');
    parrafo2.classList.add('infodescrip');

    var parrafo3 = document.createElement('p');
    parrafo3.classList.add('infoDS');
    parrafo3.innerHTML = `<b>Cerradura:</b> ${cerraduraseleccionada}`;

    var parrafo4 = document.createElement('p');
    parrafo4.classList.add('infoDS');
    parrafo4.innerHTML = `<b>Color:</b> ${colorseleccionado}`;

    nuevaEstructura.appendChild(titulo);
    nuevaEstructura.appendChild(parrafo1);
    nuevaEstructura.appendChild(parrafo2);
    nuevaEstructura.appendChild(parrafo3);
    nuevaEstructura.appendChild(parrafo4);

    switch (tiposeleccionado){
      case "Puerta Blindada":
        parrafo2.innerHTML = `Esta caja fuerte cuenta con una construcción sólida y segura, empleando láminas de Cold Rolled tanto en su interior como en su exterior para garantizar una resistencia excepcional. Su diseño resistente al fuego ofrece una protección adicional, complementada por paredes de hormigón que recubren sus seis caras, asegurando la máxima seguridad y confiabilidad para resguardar cualquier contenido almacenado en su interior.`;
        break;
      case "SemiBlindada":
        parrafo2.innerHTML = `Esta caja fuerte semiblindada ha sido cuidadosamente diseñada para ofrecer una protección óptima. Sus láminas exteriores están fabricadas con laminas HR, mientras que las interiores utilizan laminas ColdRolled, conformando un sólido sistema de seguridad. En el corazón de estas láminas se encuentra una capa de hormigón colocada, reforzando aún más su robustez y proporcionando una defensa adicional ante cualquier intento de acceso no autorizado.`;
        break;
      case "Blindada":
        parrafo2.innerHTML = `Esta caja fuerte blindada ofrece un nivel excepcional de seguridad. Tanto las láminas exteriores como las interiores están fabricadas con laminas HR, creando un blindaje robusto y resistente. Su capacidad vulcanizable y resistencia al fuego garantizan una protección adicional contra diversas amenazas. Además, las láminas antibroca ofrecen una capa adicional de seguridad, mientras que las paredes de hormigón dispuestas refuerzan su solidez y confiabilidad, asegurando la máxima protección para los objetos almacenados en su interior.`;
        break;
      case "Cold Rolled":
        parrafo2.innerHTML = `Este cofre está fabricado con láminas de Cold Rolled, ofreciendo una sólida resistencia y durabilidad. Su diseño requiere que esté anclado a una pared para garantizar una seguridad óptima. Esta medida proporciona una capa adicional de protección, asegurando que el cofre permanezca estable y firme, reforzando así su capacidad para resguardar de manera efectiva cualquier contenido almacenado en su interior.`;
        break;
      case "HR":
        parrafo2.innerHTML = `Este cofre está construido con láminas HR. A pesar de su capacidad para no estar anclado, su diseño permite la opción de fijarlo a una pared para proporcionar una capa adicional de estabilidad y resistencia, lo que fortalece aún más su capacidad para resguardar de forma confiable cualquier contenido depositado en su interior.`;
        break;
      case "HR Mecanismo de Apoyo":
        parrafo2.innerHTML = `Este robusto cofre, fabricado con láminas HR, requiere estar anclado de manera obligatoria a una pared para asegurar su máxima seguridad. Además, cuenta con un mecanismo de apoyo incorporado que fortalece aún más su estabilidad y resistencia. Esta combinación de características ofrece una protección óptima, asegurando que el cofre permanezca firmemente fijado a la pared y proporcionando un nivel excepcional de seguridad para cualquier objeto almacenado en su interior.`;
        break;
    }

    switch (colorseleccionado) {
      case "Gris Martillado":
        caja.forEach(caja => {
          caja.style.backgroundColor = "#686c6f";
          })
        break;
      case "Madera":
        caja.forEach(caja => {
          caja.style.backgroundColor = "#68000d";
          })
        break;
      case "Negro":
        caja.forEach(caja => {
          caja.style.backgroundColor = "black";
          })
        break;  
      case "Trigo":
        caja.forEach(caja => {
          caja.style.backgroundColor = "wheat";
          })
        break; 
      case "Azul":
        caja.forEach(caja => {
          caja.style.backgroundColor = "blue";
          })
        break;
      case "Rojo":
        caja.forEach(caja => {
          caja.style.backgroundColor = "red";
          })
        break;
    }
    
});


