let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let contador = 1;
while (contador <= 10) {
    contador++;
    let usuario = parseInt(prompt("Adivina el numero del  1 al 100"));
    if(usuario == numeroSecreto){
        console.log("¡Felicidades adivinaste el numero!");
        break;
    }else if (numeroSecreto > usuario){
        console.log("El numero secreto es mayor a:" , usuario , "intenta de nuevo");
    }else if (numeroSecreto < usuario){
        console.log("El numero secreto es menor a:" , usuario , "intenta de nuevo");
    }if(contador == 11){
        console.log(" Lo siento, no has adivinado el número secreto \n" , "El numero secreo era: " + numeroSecreto);
        break;
    }
}
