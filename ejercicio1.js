const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
// Base por altura
readline.question('Ingrese la base: ', (base) => {
readline.question('Ingrese la altura: ', (altura) => {
    let resultadobaseporaltura = parseInt(base) * parseInt(altura) / 2;
    console.log(`La multiplicación de ${base} y ${altura} es: ${resultadobaseporaltura}`);
  
// Suma de dos números
readline.question('Ingrese el primer valor: ', (valor1) => {
readline.question('Ingrese el segundo valor a sumar: ', (valor2) => {
    let resultado = parseInt(valor1) + parseInt(valor2);
    console.log(`La suma de ${valor1} y ${valor2} es: ${resultado}`);

//numero elevado al cuadrado
readline.question ("Digite el numero a elevar al cuadrado:" , (numeroAlCuadrado)=>{
    let resultadoNumeroCuadrado = parseInt (numeroAlCuadrado) *2;
    console.log(`Resultado del numero al cuadrado es: ${resultadoNumeroCuadrado}`); 

//pasar de euros a dolares
readline.question ("Digite el numero del euro:" , (numeroEuro)=>{
    let resultadoDolar = parseInt (numeroEuro) *1.19;
    console.log(`Resultado de la conversion es: ${resultadoDolar}`); 
  



            readline.close();
        });
      });
    });
  });
});
});