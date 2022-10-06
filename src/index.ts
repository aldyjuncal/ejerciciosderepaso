/*Escribir un bucle que haga siete llamadas a console.log
para entregar esta salida:
#
##
###
####
#####
######
#######
*/

for (let i: string = "#"; i.length < 8; i += "#") {
  console.log(i);
}

/*
Escribe una función que usa console.log para imprimir por pantalla los números de 1 a 100 con las siguientes
excepciones:
si es divisible por 3: Fizz
si es divisible por 5: Buzz
si es divisible por 3 y por 5: FizzBuzz
*/
for (let i = 1; i <= 100; i++) {
  let print: string = ""; //falsy value when empty
  if (i % 3 === 0) print += "Fizz";
  if (i % 5 === 0) print += "Buzz";
  console.log(print || i); //Si print contiene una cadena vacía, se considera false (por eso decimos arriba que es un "falsy" value, no es false en sí, pero se interpreta como tal. Then... el console log no lo imprime y muestra el contador, porque así lo indica el operador lógico or, representado sasís: || )
}

//versión más fácil de entender... I think 🤔
for (let i: number = 1; i <= 100; i++) {
  let print: string = "";
  if (i % 3 === 0) print += "Fizz";
  if (i % 5 === 0) print += "Buzz";
  if (!print.length) print = i.toString();
  console.log(print);
}
/*
Escriba un programa que crea un string que representa una grilla de 8 x 8 (un tablero de ajedrez, con un escaque blanco, uno negro...). En cada posición de la grilla puede haber un espacio en blanco o un '#'. Utilice \n para crear
una nueva línea al finalizar cada fila.
  #  #  #  #
#  #  #  #
  #  #  #  #
#  #  #  #
  #  #  #  #
#  #  #  #
  #  #  #  #
#  #  #  #
*/
let size: number = 8;
let chessBoard: string = "";
for (let y: number = 0; y < size; y++) {
  for (let x: number = 0; x < size; x++) {
    if ((y + x) % 2 === 0) {
      chessBoard += " ";
    } else {
      chessBoard += "#";
    }
  }
  chessBoard += "\n";
}
console.log(chessBoard);
