$(document).ready(function(){
	console.log("Hola a todos");
	$("#main").load("views/css_selector.html");
});


$("#boton").click(function(){
	var nombre = $("#nombre").val();
	var apellido = $("#apellido").val();

	var mensaje = "Tu nombre es " + nombre + " y tu apellido es " + apellido;

	setearAlerta(mensaje);
});

function setearAlerta(mensaje){
	$("#aviso").html(mensaje);
	$("#aviso").removeClass("hide");
}

$("#id_selector").click(function(){
	$("#main").load("views/id_selector.html");
});

$("#css_selector").click(function(){
	$("#main").load("views/css_selector.html");
});

$("#boton_css").click(function(){
	console.log("!31231");
	$("#boton_css").css("background","yellow");
})

