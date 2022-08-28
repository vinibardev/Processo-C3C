var arr = [];

function validaInput() {
  var limite = parseInt(document.getElementById("entrada").value);

  if (isNaN(limite)) {
    resultado.textContent = "Por favor, preencha o campo corretamente.";
  } else if (limite <= 0) {
    resultado.textContent = "Por favor, digite um valor inteiro.";
  } else {
    return trocaNumero();
  }
}

function trocaNumero() {
  var limite = parseInt(document.getElementById("entrada").value);
  var resultado = document.getElementById("resultado");

  for (let i = 1; i <= limite; i++) {
    if (i % 5 == 0 && i % 9 == 0) {
      arr.push("LuidyMoura");
    } else if (i % 5 == 0) {
      arr.push("Luidy");
    } else if (i % 9 == 0) {
      arr.push("Moura");
    } else {
      arr.push(i);
    }
  }
  console.log(arr);
  resultado.textContent = arr;
}
