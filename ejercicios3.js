
/*
function mostrarLista(){
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])       
    }
}

mostrarLista();
*/

/*
function listaReves(){
    for (let i = lista.length-1; i>=0; i--){
        console.log(lista[i]) 
    }
}
listaReves();
*/

function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);