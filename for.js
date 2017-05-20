function contarA(cadena, letra){
  for (var i = 0, contA = 0; i < cadena.length; i++) {
    if (cadena[i] === letra) {
      contA++
    }
  }
  return contA;
}

var cad = "Romero";
var letra = "r";
console.log("la cantidad de letras " + letra + " es: " + contarA(cad, letra));
