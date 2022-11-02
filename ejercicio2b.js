// Ejercicio 2-b

const array1 = [
    [1, 3, 5],
    [7, 9, 7],
    [5, 3, 1],
  ];
  
  const array2 = [
    [2, 4, 6],
    [8, 10, 8],
    [6, 4, 2],
  ];


const multArr = (arr1,arr2) =>{

    let finalArr = []

    for(let i = 0; i < arr1.length; i++){

        

        for(let x = 0; x < arr2.length; x++){

            let multi = 1;
            multi = multi * arr1[i][x] * arr2[x][i]
            finalArr.push(multi)
        }
        
    }
    return finalArr;
}

let result = multArr(array1, array2)

const fixingResult = (arr) =>{

    let finalSolution = [];

    for(i = 0; i < arr.length; i++){
        let c = arr[i].toString()
        if( c.length > 2){
            finalSolution.push(c)
            
        }else if( c.length == 2){
            finalSolution.push("0"+ c)
        }else{
            finalSolution.push("00" + c)
        }
        
    }
    return finalSolution
}

let solved = fixingResult(result)

console.log(solved)






