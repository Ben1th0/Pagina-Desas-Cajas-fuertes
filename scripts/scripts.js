
const botonCofre = document.getElementById("btnc");
const botonCaja = document.getElementById("btnf");

botonCofre.addEventListener("click", function(){
    var tipo1 = document.getElementById("textoTipo1");
    var RdBtn1 = document.getElementById("tipo1")
    RdBtn1.value = 'Cold Rolled'
    tipo1.textContent = "Cold Rolled"
    var tipo2 = document.getElementById("textoTipo2");
    var RdBtn2 = document.getElementById("tipo2")
    RdBtn2.value = 'HR'
    tipo2.textContent = "HR"
    var tipo3 = document.getElementById("textoTipo3");
    var RdBtn3 = document.getElementById("tipo3")
    RdBtn3.value = 'HR Mecanismo de Apoyo'
    tipo3.textContent = "HR Mecanismo de Apoyo"
})

botonCaja.addEventListener("click", function(){
    var tipo1 = document.getElementById("textoTipo1");
    var RdBtn1 = document.getElementById("tipo1")
    RdBtn1.value = 'Puerta Blindada'
    tipo1.textContent = "Puerta Blindada";
    var tipo2 = document.getElementById("textoTipo2");
    var RdBtn2 = document.getElementById("tipo2")
    RdBtn2.value = 'SemiBlindada'
    tipo2.textContent = "SemiBlindada";
    var tipo3 = document.getElementById("textoTipo3");
    var RdBtn3 = document.getElementById("tipo3")
    RdBtn3.value = 'Blindada'
    tipo3.textContent = "Blindada";
})

document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('header').classList.toggle('header');
})