function validaInput() {
  var ax2 = parseFloat(document.getElementById("valorA").value);
  var bx = parseFloat(document.getElementById("valorB").value);
  var c = parseFloat(document.getElementById("valorC").value);

  if (isNaN(ax2) || isNaN(bx) || isNaN(c)) {
    resultado.textContent = "Preencha todos os campos corretamente.";
  } else {
    return bhaskara();
  }
}

function bhaskara(ax2, bx, c) {
  var ax2 = parseFloat(document.getElementById("valorA").value);
  var bx = parseFloat(document.getElementById("valorB").value);
  var c = parseFloat(document.getElementById("valorC").value);
  const delta = bx ** 2 - 4 * ax2 * c;
  const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
  const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);

  if (delta >= 0) {
    const raizes = [];
    raizes.push(x1);
    raizes.push(x2);
    return (resultado.textContent = `S={${raizes}}`);
  } else {
    return (resultado.textContent = "Delta é negativo.");
  }
}