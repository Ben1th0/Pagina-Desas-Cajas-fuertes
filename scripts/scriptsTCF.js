const nuevaEstructura = document.querySelector('main');
const seccion = document.createElement('section');
    seccion.classList.add('informacioncaja');
// const caja = document.querySelectorAll('.caja');

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

    
    
    // Crear la estructura HTML dinámicamente

    var imagencerradura;

    switch (cerraduraseleccionada){
      case "Mecanica":
        imagencerradura = "/Imagenes/Mecanica.png";
        break;
      case "Digital":
        imagencerradura = "/Imagenes/Digital.png"
        break;
      case "Bluetooth":
        imagencerradura = "/Imagenes/Bluetooth.png"
        break;
      case "Wifi":
        imagencerradura = "/Imagenes/wifi.png"
        break;
      case "Biometrica":
        imagencerradura = "/Imagenes/Biometrica.png"
        break;
    }

    seccion.innerHTML = '';

    var descripcion = document.createElement('div');
    descripcion.classList.add('descripcion');
    descripcion.setAttribute('id', 'informacioncaja');

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

    var cerraduraimagen = document.createElement('img');
    cerraduraimagen.classList.add('cerraduraImagen');
    cerraduraimagen.src = imagencerradura;
    
    var parrafo4 = document.createElement('p');
    parrafo4.classList.add('infoDS');
    parrafo4.innerHTML = `<b>Color:</b> ${colorseleccionado}`;

    
    
    

    var representacion = document.createElement('div');
    representacion.classList.add('representacion');

    var espacio = document.createElement('div');
    espacio.setAttribute('id', 'espacio-3D');

    var cubo = document.createElement('div');
    cubo.setAttribute('id', 'cubo-3D');

    var base = document.createElement('div');
    base.classList.add('base');

    var puerta = document.createElement('aside');
    puerta.classList.add('caja');
    puerta.classList.add('puerta');

    var cara2 = document.createElement('aside');
    cara2.classList.add('caja');
    cara2.classList.add('cara-2');

    var cara3 = document.createElement('aside');
    cara3.classList.add('caja');
    cara3.classList.add('cara-3');

    var cara4 = document.createElement('aside');
    cara4.classList.add('caja');
    cara4.classList.add('cara-4');

    var cara5 = document.createElement('aside');
    cara5.classList.add('caja');
    cara5.classList.add('cara-5');

    var cara6 = document.createElement('aside');
    cara6.classList.add('caja');
    cara6.classList.add('cara-6');


    seccion.appendChild(descripcion);

    descripcion.appendChild(titulo);
    descripcion.appendChild(parrafo1);
    descripcion.appendChild(parrafo2);
    descripcion.appendChild(parrafo3);
    descripcion.appendChild(cerraduraimagen);
    descripcion.appendChild(parrafo4);

    seccion.appendChild(representacion);

    representacion.appendChild(espacio);

    espacio.appendChild(cubo);

    cubo.appendChild(base);
    cubo.appendChild(puerta);
    cubo.appendChild(cara2);
    cubo.appendChild(cara3);
    cubo.appendChild(cara4);
    cubo.appendChild(cara5);
    cubo.appendChild(cara6);

    nuevaEstructura.appendChild(seccion);
    
    var caja = document.querySelectorAll('.caja');

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
          caja.style.backgroundColor = "#b35c1b";
          })
        break;
      case "Negro":
        caja.forEach(caja => {
          caja.style.backgroundColor = "black";
          })
        break;  
      case "Amarillo":
        caja.forEach(caja => {
          caja.style.backgroundColor = "#d3a93d";
          })
        break; 
      case "Azul":
        caja.forEach(caja => {
          caja.style.backgroundColor = "#343669";
          })
        break;
      case "Rojo":
        caja.forEach(caja => {
          caja.style.backgroundColor = "#8b1a22";
          })
        break;
    }
    
    
});


