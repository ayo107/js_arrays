// Code goes here



function matrixBuilder(entero){
  let generateMatrix = [];
    for (let i = 0; i<entero; i++){
    let fila = [];
    for (let n = 0; n < entero; n++){
        if(i == n){
            fila.push(1)
        }else{
            fila.push(0)
        }
    }
    generateMatrix.push(fila)
    }
    return generateMatrix;
}
console.log(matrixBuilder(5));

