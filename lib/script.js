'use strict'

function getBonus( promoCode ){

  let numberArr = [];

  let promoOdd = [];
  let sumEven = 0;
  let sumOdd = 0;

  let pairOddNumber = [];

  let bonus = 0;
  let smollBonus = 100;
  let superBonus = 1000;
  let maxBonus = 2000;

  
  for(let i = 0; i < 8; i++){

      numberArr[i] = Math.floor( promoCode/10**(7 - i) ) - ( Math.floor( promoCode/10**(8 - i))*10 );

      if(numberArr[i] % 2){
        promoOdd[i] = true;
        sumOdd += numberArr[i];
      } else {
        promoOdd[i] = false;
        sumEven += numberArr[i];
      }

  }

  if(sumEven > sumOdd){

    bonus = smollBonus;

  }

  for (let i = 0; i < numberArr.length; i++){

    if(!promoOdd[i]){
      continue;
    }

    let arr = [];

    for(let j = i; j < numberArr.length; j++){
       i = j;
      if (promoOdd[j]){

        arr.push( j );

      } else{
       
        i = j;
        break;
 
      }
    }

    if(arr.length > 1){

      pairOddNumber.push( arr[0], arr[1] );

    }

  }

  if(pairOddNumber.length > 2){

    
    let checkMaxBonus = true;

    for (let i = 0; i < pairOddNumber.length; i+=2){
  
      if( numberArr[ pairOddNumber[i] ] > numberArr[ pairOddNumber[i+1] ] ){

        checkMaxBonus = false;
        break;

      }

    }

    if(checkMaxBonus){

      bonus = maxBonus;

    } else{

      bonus = superBonus;

    }

  }
  
   return bonus;

}

console.log("getBonus " + getBonus(37283988))
