/*
En Javascript un objeto es una coleccion de pares key-value. Cada par es llamada propiedad. Una propiedad puede ser una función, un array, un objeto en sí o un dato primitivo. Las funciones son llamadas métodos.
*/
let humano = {
  nombre: "jose",
  apellido: "perez",
  edad: 30,
  nombreCompleto: function(){
    return this.nombre + " " + this.apellido
  }
}

/*
Se puede acceder a las propiedades de un objeto mediante dos notaciones:
*/
humano.nombre;
humano.nombreCompleto();

/*
Se puede establecer nuevas propiedades mediante esta notación
*/
humano.edad = 40;
humano.obtenerEdad = function(){
  return this.edad;
}

/* Notación mediante corchetes */
humano["nombre"];
humano["nombreCompleto"];

humano["peso"] = 90;
humano.getPeso = function(){
  return this.peso;
}

let humanoProperty = "nombre";
console.log(humano[humanoProperty]);

/* Para borrar una propiedad usamos DELETE. Este operador retorna true si fue satisfactorio. También retorna true si la propiedad no existe o no pudo ser borrada */

delete humano.nombre;
console.log(humano.nombreCompleto());

/* Creación de objetos */
let humano = new Object();
console.log(humano); // crea un objeto empty

/* Constructores */
/* 
  Un constructor es una función que se usa para crear nuevos objetos.
  Los objetos pueden ser creados usando el constructor mediante estos dos pasos:
  * Definir el objeto original definiendo el constructor. Por convención, el nombre del     constructor debe empezar con mayúscula.
  * Crear el objeto usando el constructor mediante el operador new
*/

function OtroHumano(nombre,apellido){
  this.nombre = nombre,
  this.apellido = apellido,
  this.nombreCompleto = function() {
    return this.nombre + " " + this.apellido;
  }
}

let persona1 = new OtroHumano("Javier","Paez");

console.log(persona1);

/* Object.create en javascript  */
/* 
  Sintaxis:
  Object.create(prototype_object,propertiesObject)
  + prototypeObject: Debe ser un objeto o null
  + propertiesObject: Propiedades del nuevo objeto. Este argumento es opcional.
*/

let persona2 = Object.create(null);
typeof(persona2);
console.log(persona2);

persona2.nombre = "Marcelo";
console.log(persona2);

/* Crear el prototipo del objeto */
prototipo = {
  nombreCompleto: function(){
    return this.nombre + " " + this.apellido;
  }
}
let persona3 = Object.create(prototipo);
console.log(persona3);

persona3.nombre = "Pepe";
persona3.apellido = "Romero";

persona3.nombreCompleto();

/* Argumentos del Object.create */
/*
  Los Data Descriptors son:
  1. configurable -- true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
  2. enumerable --true if and only if this property shows up during enumeration of the properties on the corresponding object.
  3. value -- The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).
  4. writable --true if and only if the value associated with the property may be changed with an assignment operator.

  Los Access descriptors son:
  1. get
  2. set
*/

var o = {}; // Creates a new object

// Example of an object property added
// with defineProperty with a data property descriptor
Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});
// 'a' property exists in the o object and its value is 37

// Example of an object property added
// with defineProperty with an accessor property descriptor
var bValue = 38;
Object.defineProperty(o, 'b', {
  // Using shorthand method names (ES2015 feature).
  // This is equivalent to:
  // get: function() { return bValue; },
  // set: function(newValue) { bValue = newValue; },
  get() { return bValue; },
  set(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});
o.b; // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue,
// unless o.b is redefined

// You cannot try to mix both:
Object.defineProperty(o, 'conflict', {
  value: 0x9f91102,
  get() { return 0xdeadbeef; }
});
// throws a TypeError: value appears
// only in data descriptors,
// get appears only in accessor descriptors

/* Writable attribute */
var o = {}; // Creates a new object

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});

console.log(o.a); // logs 37
o.a = 25; // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
console.log(o.a); // logs 37. The assignment didn't work.

// strict mode
(function() {
  'use strict';
  var o = {};
  Object.defineProperty(o, 'b', {
    value: 2,
    writable: false
  });
  o.b = 3; // throws TypeError: "b" is read-only
  return o.b; // returns 2 without the line above
}());

/* Enumerable attribute */
var o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3
}); // enumerable defaults to false
o.d = 4; // enumerable defaults to true
         // when creating a property by setting it
Object.defineProperty(o, Symbol.for('e'), {
  value: 5,
  enumerable: true
});
Object.defineProperty(o, Symbol.for('f'), {
  value: 6,
  enumerable: false
});

for (var i in o) {
  console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
o.propertyIsEnumerable('d'); // true
o.propertyIsEnumerable(Symbol.for('e')); // true
o.propertyIsEnumerable(Symbol.for('f')); // false

var p = { ...o }
p.a // 1
p.b // undefined
p.c // undefined
p.d // 4
p[Symbol.for('e')] // 5
p[Symbol.for('f')] // undefined

/* Configurable attribute */
//The configurable attribute controls at the same time whether the property can be deleted from the object and whether its attributes (other than value and writable) can be changed.

var o = {};
Object.defineProperty(o, 'a', {
  get() { return 1; },
  configurable: false
});

Object.defineProperty(o, 'a', {
  configurable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  enumerable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  set() {}
}); // throws a TypeError (set was undefined previously)
Object.defineProperty(o, 'a', {
  get() { return 1; }
}); // throws a TypeError
// (even though the new get does exactly the same thing)
Object.defineProperty(o, 'a', {
  value: 12
}); // throws a TypeError

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1

prototipoDos = {
  nombreCompleto: function(){
    return this.nombre + " " + this.apellido;
  }
}

let persona4 = Object.create(prototipoDos, {
  'nombre': {
    value: 'Romeo',
    writable: true,
    enumerable: true
  },
  'apellido': {
    value: 'Tevez',
    writable: true,
    enumerable: true
  }
})

console.log(persona4);

/* Prototypes */
/*
Cuando se crea una función, el motor de Javascript agrega una propiedad prototype a dicha función. Esta propiedad es un objeto(llamado objeto prototype) el cual tiene un constructor por default. Para acceder al prototipo de la función usamos functionName.prototype.
*/

function HumanoDos(nombre,apellido){
  this.nombre = nombre,
  this.apellido = apellido,
  this.nombreCompleto = function(){
    return this.nombre + " " + this.apellido;
  }
}

let persona5 = new HumanoDos('Mateo','Perez');
console.log(persona5);
console.log(persona5.prototype);

let persona6 = new HumanoDos('Maria','Rodriguez');
console.log(persona6.__proto__ === persona5.__proto__);

HumanoDos.prototype.nombre = "Rogelia";
console.log(HumanoDos.prototype.nombre);

HumanoDos.prototype['edad'] = 45;
console.log(HumanoDos.prototype['edad']);

console.log(HumanoDos.prototype);

//Create an empty constructor function
function Person(){

}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.sayName = function(){
	console.log(this.name);
}

//Create an object using the Person constructor function
var person1 = new Person();

//Access the name property using the person object
console.log(person1.name)// Output" Ashwin

function Person(){
}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.friends = ['Jadeja', 'Vijay'],//Arrays are of reference type in JavaScript
Person.prototype.sayName = function(){
	console.log(this.name);
}

//Create objects using the Person constructor function
var person1= new Person();
var person2 = new Person();

//Add a new element to the friends array
person1.friends.push("Amit");

console.log(person1.friends);// Output: "Jadeja, Vijay, Amit"
console.log(person2.friends);// Output: "Jadeja, Vijay, Amit"

//Define the object specific properties inside the constructor
function Human(name, age){
	this.name = name,
	this.age = age,
	this.friends = ["Jadeja", "Vijay"]
}
//Define the shared properties and methods using the prototype
Human.prototype.sayName = function(){
	console.log(this.name);
}
//Create two objects using the Human constructor function
var person1 = new Human("Virat", 31);
var person2 = new Human("Sachin", 40);

//Lets check if person1 and person2 have points to the same instance of the sayName function
console.log(person1.sayName === person2.sayName) // true

//Let's modify friends property and check
person1.friends.push("Amit");

console.log(person1.friends)// Output: "Jadeja, Vijay, Amit"
console.log(person2.friends)//Output: "Jadeja, Vijay"

/* Herencia */

function SuperType(){
  this.nombre = 'Marcelo'
}

SuperType.prototype.getSuperNombre = function(){
  return this.nombre;
}

function SubType(){
  this.edad = 26;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubEdad = function(){
  return this.edad;
}

let subTypeObj = new SubType();
console.log(subTypeObj.nombre);
console.log(subTypeObj.edad);
console.log(subTypeObj.getSuperNombre());
console.log(subTypeObj.getSubEdad());
