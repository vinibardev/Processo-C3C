function validaInput() {
  var nota = parseInt(document.getElementById("nota").value);

  if (isNaN(nota)) {
    resultado.textContent = "Por favor, preencha o campo corretamente.";
  } else if (nota > 100 || nota < 0) {
    resultado.textContent =
      "A nota deve estar entre 0 e 100. Insira um valor válido.";
  } else {
    return situacaoAluno();
  }
}

function situacaoAluno(nota) {
  var nota = parseInt(document.getElementById("nota").value);
  const notaArredondada = arredondar(nota);

  if (notaArredondada < 40) {
    resultado.textContent = `Nota ${notaArredondada}. O aluno está reprovado!`;
  } else {
    resultado.textContent = `Nota ${notaArredondada}. O aluno está aprovado!`;
  }
}

function arredondar(nota) {
  if (nota < 38) {
    return nota;
  } else if (nota % 5 >= 3) {
    return (nota = nota + (5 - (nota % 5)));
  } else {
    return nota;
  }
}