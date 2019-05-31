function cambiarTitulo(){
    var titulos = document.getElementsByTagName("h2");
    console.info(titulos);
    for(var i=0;i<titulos.length;i++){
        console.log(titulos[i].innerHTML);
        if(i === 0){
            titulos[0].innerHTML = "Primer título cambiado";
        } else if(i === 1){
            titulos[1].innerHTML = "Segundo titulo cambiado";
        }
    }
}

var linea = document.createElement("hr");

var container = document.querySelector(".container");
container.appendChild(linea);

txt1 = document.createElement("input");
txt2 = document.createElement("input");

txt1.setAttribute("type","text");
txt2.setAttribute("type","text");
txt1.setAttribute("id","num1");
txt2.setAttribute("id","num2");


txt1.classList.add("form-control");
txt2.classList.add("form-control");

document.querySelector("#input1").appendChild(txt1);
document.querySelector("#input2").appendChild(txt2);

function ejecutar(){
    var seleccion = document.getElementById("select_operacion");
    var operacion = seleccion.options[seleccion.selectedIndex].value;
    console.log(operacion);
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);

    console.log(numero1);
    console.log(numero2);
    var resultado = 0;
    
    if(operacion === "1"){
        resultado = numero1 + numero2;
    } else if(operacion === "2"){
        resultado = numero1 - numero2;
    } else if(operacion === "3"){
        resultado = numero1 * numero2;
    } else {
        if(numero2 > 0){
            resultado = numero1 / numero2;
        } else {
            resultado = "No se puede dividir por 0";
        }
    }

    var alert = document.querySelector("#resultado"); 
    alert.innerHTML = "El resultado de la operación es: " + resultado;
    alert.classList.remove("hide");
    
}