var tiempo = 2500;
var contenido = new Array(4);

contenido[0] =
	"<div class='verde'><p>Proximamente tendremos estrenos exclusivos</p></div>";
contenido[1] =
	"<div class='azul'><p>Disfruta de tus subgeneros favoritos</p></div>";
contenido[2] = "<div class='rojo'><p>Bienvenido a horror VHS</p></div>";
contenido[3] = "<div class='amarillo'><p>Espera pronto mas sorpresas</p></div>";
var indice_contenido = 0;

//funcion
function cambiar_contenido() {
	if (indice_contenido >= contenido.length) indice_contenido = 0;
	document.getElementById("contenedorjs").innerHTML =
		contenido[indice_contenido];
	indice_contenido++;
	setTimeout("cambiar_contenido()", tiempo);
}

let titulo = document.getElementById("peliculas");

function confirmar() {
	let nombre = document.getElementById("nombre").value;
	let peli = document.getElementsByName("pro");
	let fan = document.getElementById("cliente");
	let valorfan = " ";

	for (let a = 0; a < peli.length; a++) {
		if (peli[a].checked) {
			valorfan = peli[a].value;
		}
	}

	if (fan.checked) {
		fan = "si";
	} else {
		fan = "no";
	}

	console.log(
		"Nombre:" + nombre + "\n es fan\n" + valorfan + "\n Horror Fan :" + fan
	);

	// Added by Carlos Terán

	// Card that changes everything
	let enteredInformation = document.getElementById("enteredInformation");
	
	enteredInformation.innerHTML = 
		`<h3>Película: ${nombre}</h3>
		<p>Te gusta el horror: ${valorfan}</p>
		<p>Siempre has sido fan: ${fan}</p>`;

	enteredInformation.className = "card";

	// Card that just modifies the tags:
	let enteredInformation2 = document.getElementById("enteredInformation2");

	let name = enteredInformation2.getElementsByTagName("h3");
	name[0].innerText += nombre;
	let horrorFan = enteredInformation2.getElementsByTagName("p");
	horrorFan[0].innerText += valorfan;
	horrorFan[1].innerText += fan; 

	// End of the addition
}

function clean() {
	document.getElementById("nombre").value = "";
	let peli = document.getElementsByName("pro");

	for (let a = 0; a < peli.length; a++) {
		if (peli[a].checked) {
			peli[a].checked = false;
		}
	}
	document.getElementById("cliente").checked = false;
}
