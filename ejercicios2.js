function masaCorporal(){
    altura = prompt('Ingresa tu altura en metros: ');
    peso = prompt('Ingresa tu peso en kg: ');

    resultado = peso/(altura*altura);
    return resultado
}

masaCorporal();
alert(`Tu indice de masa corporal es ${resultado}`);