function validaInput() {
  var lado1 = parseInt(document.getElementById("lado1").value);
  var lado2 = parseInt(document.getElementById("lado2").value);
  var lado3 = parseInt(document.getElementById("lado3").value);

  if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
    resultado.textContent = "Preencha todos os campos corretamente.";
  } else if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    resultado.textContent = "Preencha todos os campos corretamente.";
  } else {
    return retornaTipo();
  }
}

function retornaTipo() {
  var lado1 = parseInt(document.getElementById("lado1").value);
  var lado2 = parseInt(document.getElementById("lado2").value);
  var lado3 = parseInt(document.getElementById("lado3").value);
  var resultado = document.getElementById("resultado");

  if (lado1 == lado2 && lado2 == lado3) {
    resultado.textContent = "O triângulo é equilátero.";
  } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    resultado.textContent = "O triângulo é escaleno.";
  } else {
    resultado.textContent = "O triângulo é isósceles.";
  }
}