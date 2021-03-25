var botaoAdicionar = document.querySelector("#buscar-pacientes");
var jaClicou = false;

botaoAdicionar.addEventListener("click",function(){
	if(jaClicou==false){
	jaClicou=true;
	console.log("busquei os pacientes");
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){
		var erroAjax = document.querySelector("#erro-ajax");

		if(xhr.status == 200){
			erroAjax.classList.add("invisivel");
		var resposta = xhr.responseText;
		console.log(typeof resposta);

		var pacientes = JSON.parse(resposta);
		
		

		 pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });

	}

	else{
		console.log(xhr.status);
		console.log(xhr.responseText);
		erroAjax.classList.remove("invisivel");
	}

});
	xhr.send();


}else{
		alert("As informações já foram importadas!");
}

})

