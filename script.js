let numero = parseFloat(prompt("Digite um número decimal:"));
console.log("Para cima:", Math.ceil(numero));
console.log("Para baixo:", Math.floor(numero));
console.log("Mais próximo:", Math.round(numero));

let numeroDigitado = prompt("Digite um número:");
console.log("O número tem", numeroDigitado.length, "dígitos.");

let frutas = "maçã,pera,uva,laranja";
let arrayFrutas = frutas.split(",");
let novaString = arrayFrutas.join(";");
console.log("Array:", arrayFrutas);
console.log("Nova string:", novaString);

let frase = prompt("Digite uma frase:");
console.log("Maiúsculas:", frase.toUpperCase());
console.log("Minúsculas:", frase.toLowerCase());

let texto = "Estou aprendendo a programar em JavaScript todos os dias";
console.log("A frase contém 'JavaScript'? ", texto.includes("JavaScript"));

let fraseCarro = "O carro é rápido. Eu gosto de carro. Carro é caro.";
let novaFrase = fraseCarro.replace(/carro/gi, "moto");
console.log(novaFrase);