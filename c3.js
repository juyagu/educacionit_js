var  reg = /javascript/;
//console.log("hola javascript".match(reg));
var coincide = "hola javascript".match(reg);
console.log(coincide[0]);

var nocoincide = "que se yo".match(reg);
console.log(nocoincide);


if("hola javascript".match(reg)){
    console.log("Estoy en el cuerpo del if");
}else {
    console.log("Estoy en el cuerpo del else");
}

//console.log("javascript con minuscula".match(/[Jj]avascript)/));
//var a  = /[Jj]avascript)/;
//console.log("javascript con minuscula".match(a));

console.log("aa2bb".match(/[0-9]/));

console.log("22 33".match(/[^0-9]/));

/*
Metacaracteres
\w para letras, equivalente a [a-zA-Z]
\W para no letras, equivalente a [^a-zA-Z]
\d para dígitos, equivalente a [0-9]
\D para no dígitos, equivalente a [^0-9]
\s para espacios en blanco (espacios, tabuladores, etc).
\S para no espacios en blanco.
*/

console.log("aa2bb".match(/\d/));


/* REPETICIÓN DE CARACTERES */
var r1 = "1234".match(/\d{2}/);
console.log(r1);

var r2 = "1234".match(/\d{1,3}/);
console.log(r2);

var r3 = "1234".match(/\d{3,10}/);
console.log(r3);


/* RANGOS HABITUALES */
var h1 = "a2a".match(/a\d+a/);
console.log(h1);

var h2 = "a234a".match(/a\d+a/);
console.log(h2);

//Patrón greedy o codicioso
var h3 = "aaaa".match(/a+/);
console.log(h3);

//Patrón nongreedy o no codicioso
var h4 = "aaaa".match(/a+?/);
console.log(h4);


/* EXTRAER PARTES DE UNA CADENA */
var p1 = "27/11/2019".match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
console.log(p1);

var p2 = "xyxyxyxy".match(/(xy)+/);
console.log(p2);


/* /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ */

/*
isValidEmail('david@davidburgos.blog'); // true
isValidEmail('david@ejemplo.com.es'); // true 
isValidEmail('@google.com'); // false 
isValidEmail('hola@.com'); // false 
isValidEmail('hola@google.c'); // false 
isValidEmail('hola@google'); // false
*/


console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*([\.\w{2,4}]?)+$/.test("juyagu.ho-la@gmail.com.as"));

console.log("juyagu.ho-la@gmail.com.as".match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/));



document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault()
  });

  function func1(event) {
    alert("DIV 1");
    if (document.getElementById("check").checked) {
      event.stopPropagation();
    }
  }
  
  function func2() {
    alert("DIV 2");
  }