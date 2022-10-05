function Calculadora() {
  let num1 = Number(document.getElementById("valor1").value);
  let num2 = Number(document.getElementById("valor2").value);

  let oper = document.getElementById("oper").value;

  let resu = document.getElementById("resultado");

  let somar = num1 + num2;
  let subtrair = num1 - num2;
  let multiplicar = num1 * num2;
  let dividir = num1 / num2;

  if (oper == "somar") {
    num1 + num2;
    resu.innerText = `A soma entre ${num1} e ${num2} é: ${somar} 😆`;
  } else if (oper == "subtrair") {
    num1 - num2;
    resu.innerHTML = `A subtração entre ${num1} e ${num2} é: ${subtrair} 😆`;
  } else if (oper == "multiplicar") {
    num1 * num2;
    resu.innerHTML = `A multiplicação entre ${num1} e ${num2} é: ${multiplicar} 😆`;
  } else {
    num1 / num2;
    resu.innerHTML = `A divisão entre ${num1} e ${num2} é: ${dividir} 😆`;
  }
}
