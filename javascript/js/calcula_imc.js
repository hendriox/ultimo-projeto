var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";


var pacientes= document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length;i++){

 var paciente=pacientes[i];

var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdImc = paciente.querySelector(".info-imc");


var altura = tdAltura.textContent;
var peso = tdPeso.textContent;

var alturaEhValida = validaAltura(altura);
var pesoEhValido = validaPeso(peso);//true ou false.

if (!pesoEhValido) {
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
    pesoEhValido = false;

}

if (!alturaEhValida) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdAltura.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
    
}

if (alturaEhValida && pesoEhValido) {

    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;   
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
    paciente.classList.add("paciente-invalido");
	}
}


function validaPeso(peso){
	if(peso>= 0 && peso<600){
		return true;

	}else{
		return false;
	}
}




function validaAltura(altura){

	if(altura>=0 && altura<2.6){
		return true;
	}else{
		return false;
	}
}

function calculaImc(peso,altura){
	var imc =0;

	imc=peso / (altura*altura);
	return imc.toFixed(2);
}
