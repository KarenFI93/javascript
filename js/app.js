
var numero = "";
var operandoa;
var operandob;
var operacion;
var operando;
var contar;

var Calculadora = new Object();	

    Calculadora.init = function init(){
		//Enseguida creamos nuestra función init e iniciamos convirtiéndonos en los elementos html por medio de su id y los guardamos en sus respectivas variables para hacer más legible el ejemplo. Variables
		var resultado = document.getElementById('display');
		var reset = document.getElementById('on');
		var suma = document.getElementById('mas');
		var resta = document.getElementById('menos');
		var multiplicacion = document.getElementById('por');
		var division = document.getElementById('dividido');
		var igual = document.getElementById('igual');
		var uno = document.getElementById('1');
		var dos = document.getElementById('2');
		var tres = document.getElementById('3');
		var cuatro = document.getElementById('4');
		var cinco = document.getElementById('5');
		var seis = document.getElementById('6');
		var siete = document.getElementById('7');
		var ocho = document.getElementById('8');
		var nueve = document.getElementById('9');
		var cero = document.getElementById('0');
		var punto = document.getElementById('punto');
		var signo = document.getElementById('sign');
	
		function validacion(){
		   numero_pantalla = parseInt(document.getElementById("display").innerHTML);
		}
		
		
	//	
	//	Para cambiar el teclado de cada elemento al dar click sobre el y vuelva a su forma original al soltar la tecla.
		var x = document.getElementsByClassName('tecla');

		for(var i = 0; i < x.length; i++){
			x[i].addEventListener('mousedown', color);
			x[i].addEventListener('mouseup', color);
		}

		
		function color(elEvento){
			 evento = elEvento || window.event;
			 tipo = evento.type;
			 if (tipo == "mousedown") {
				this.style.padding="1.5px";
			}
			 else if (tipo == "mouseup") {
				this.style.padding="0px";
			}
		}
		window.onload = function() {
			document.getElementsByClassName("tecla").onmousedown= color;
			document.getElementsByClassName("tecla").onmouseup= color;
		}
		
		
		//Para limitar cantidad de digitos a mostrar en pantalla
		function maximo(){
			conversion = (document.getElementById("display").innerHTML);
			digitos= conversion.length;
			console.log(digitos);
			if (digitos >=8) {
			    //resultado.textContent = conversion.substring(0,7);
				numero_pantalla.innerHTML= numero_pantalla.innerHTML.substring(0,7);
			}
		}
		

	
		//Eventos de click
		uno.onclick= function(e){
			  validacion();
			  maximo();
			  if (numero_pantalla==0) {
				  resultado.textContent = "";
				  resultado.textContent = resultado.textContent  + "1";
			  } else
				 resultado.textContent = resultado.textContent  + "1";
		}	
		dos.onclick = function(e){
			  validacion();
			  maximo();
			  if (numero_pantalla==0) {
				  resultado.textContent = "";
				  resultado.textContent = resultado.textContent  + "2";
			  } else
				 resultado.textContent = resultado.textContent  + "2";
		}
		tres.onclick = function(e){
			  validacion();
			  maximo();
			  if (numero_pantalla==0) {
				  resultado.textContent = "";
				  resultado.textContent = resultado.textContent  + "3";
			  } else
				 resultado.textContent = resultado.textContent  + "3";
		}
		cuatro.onclick = function(e){
		      validacion();
			  maximo();
			  if (numero_pantalla==0) {
				  resultado.textContent = "";
				  resultado.textContent = resultado.textContent  + "4";
			  } else
				 resultado.textContent = resultado.textContent  + "4";
		}
		cinco.onclick = function(e){
		   validacion();
		   maximo();
			  if (numero_pantalla==0) {
				  resultado.textContent = "";
				  resultado.textContent = resultado.textContent  + "5";
			  } else
				 resultado.textContent = resultado.textContent  + "5";
		}
		seis.onclick = function(e){
		   validacion();
		   maximo();
			  if (numero_pantalla==0) {
				  resultado.textContent = "";
				  resultado.textContent = resultado.textContent  + "6";
			  } else
				 resultado.textContent = resultado.textContent  + "6";
		}
		siete.onclick = function(e){
		    validacion();
			maximo();
			  if (numero_pantalla==0) {
				  resultado.textContent = "";
				  resultado.textContent = resultado.textContent  + "7";
			  } else
				 resultado.textContent = resultado.textContent  + "7";
		}
		ocho.onclick = function(e){
		   validacion();
		   maximo();
			  if (numero_pantalla==0) {
				  resultado.textContent = "";
				  resultado.textContent = resultado.textContent  + "8";
			  } else
				 resultado.textContent = resultado.textContent  + "8";
		}
		nueve.onclick = function(e){
		    validacion();
			maximo();
			  if (numero_pantalla==0) {
				  resultado.textContent = "";
				  resultado.textContent = resultado.textContent  + "9";
			  } else
				 resultado.textContent = resultado.textContent  + "9";
		}
		cero.onclick = function(e){
			 validacion();
			 maximo();
			  if (numero_pantalla==0) {
				  resultado.textContent = "";
				  resultado.textContent = resultado.textContent  + "0";
			  } else
				 resultado.textContent = resultado.textContent  + "0";
		}
		
		reset.onclick = function(e){
		resetear();
		}
	
		punto.onclick = function(e){
			  maximo();
			  numero_punto = document.getElementById("display").innerHTML;

			 if (numero_punto.indexOf('.') == -1) {
			 resultado.textContent = resultado.textContent  + ".";	
			 }
			 else
				 return false;
		}
		
		
		signo.onclick = function(e){
			 numero_signo = document.getElementById("display").innerHTML;
			 
			 if (numero_signo.indexOf('-') == -1) {
			 numero_signo= -numero_signo;
			 resultado.textContent = "";
			 resultado.textContent = resultado.textContent  + numero_signo;	
			 }else
				if (numero_signo.indexOf('-') != -1) {
					  resultado.textContent = "";
					  resultado.textContent = resultado.textContent  + Math.abs(numero_signo) ;	
				}	
		}
		
		suma.onclick = function(e){
		  operandoa = resultado.textContent;
		  operacion = "+";
		  limpiar();
		}
		resta.onclick = function(e){
			operandoa = resultado.textContent;
			operacion = "-";
			limpiar();
		 }
		multiplicacion.onclick = function(e){
		  operandoa = resultado.textContent;
		  operacion = "*";
		  limpiar();
		}
		division.onclick = function(e){
		  operandoa = resultado.textContent;
		  operacion = "/";
		  limpiar();
		}
		igual.onclick = function(e){
		  operando = "igual";
		  operandob = resultado.textContent;
		  resolver();
		}
		
		function resetear(){
		  resultado.textContent = 0;
		}
		
		function limpiar(){
		resultado.textContent = "";
		}
		
		
	function resolver(){
		
		if(operando == "igual" && operandoa == ""){// el usuario le da igual, pero solo tiene un numero
			return false;
		} else {
		  var res = 0;
		  switch(operacion){
			case "+":
			  res = parseFloat(operandoa) + parseFloat(operandob);
			  break;
			case "-":
				res = parseFloat(operandoa) - parseFloat(operandob);
				break;
			case "*":
			  res = parseFloat(operandoa) * parseFloat(operandob);
			  break;
			case "/":
			  res = parseFloat(operandoa) / parseFloat(operandob);
			  break;
		  }
			resetear();
			total = res.toString();
			if (total.length>8) {
				resultado.textContent= total.substring(0,8);
				operandoa= 0;
			} else
				resultado.textContent = res;
				operandoa= 0;
		}
	};	
};
Calculadora.init(); // Método de inicialización para ejecutar todas las otras funciones
