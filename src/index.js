module.exports = function toReadable (number) {
  let splittedNumber = number.toString().split('');
  function simpleNumber (num){
    switch (num){
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        case '0': return '';
    };
  };
  function decim(array){
    function simpleNumber (num){
      switch (num){
          case '1': return 'one';
          case '2': return 'two';
          case '3': return 'three';
          case '4': return 'four';
          case '5': return 'five';
          case '6': return 'six';
          case '7': return 'seven';
          case '8': return 'eight';
          case '9': return 'nine';
          case '0': return '';
      };
    };
    if (array.length === 2){
      if (array[0] ==='1'){
          if (array[1] === '1') return 'eleven';
          else if  (array[1] === '2') return 'twelve';
          else if (array[1] === '3') return 'thirteen';
          else if (array[1] === '5') return 'fifteen';
          else if (array[1] === '8') return 'eighteen';
          else if (array[1] === '0') return 'ten';
          else return simpleNumber(array[1]) + 'teen';
      }
      else if (array[0] === '2'){
          return 'twenty '+ simpleNumber(array[1]); 
      }
      else if (array[0] === '3'){
        return 'thirty ' + simpleNumber(array[1]); 
      }
      else if (array[0] === '4'){
        return 'forty ' + simpleNumber(array[1]);
      }
      else if (array[0] === '5'){
        return 'fifty ' + simpleNumber(array[1]);
      }
      else if (array[0] === '8'){
        return 'eighty ' + simpleNumber(array[1]);
      }
      else return (simpleNumber(array[0])+ 'ty ' + simpleNumber(array[1])).trim();
  }
  else if (array.length === 3){
    if (array[1] ==='1'){
      if (array[2] === '1') return 'eleven';
      else if  (array[2] === '2') return 'twelve';
      else if (array[2] === '3') return 'thirteen';
      else if (array[2] === '5') return 'fifteen';
      else if (array[2] === '8') return 'eighteen';
      else if (array[2] === '0') return 'ten';
      else return simpleNumber(array[2]) + 'teen';
  }
  else if (array[1] === '2'){
      return 'twenty '+ simpleNumber(array[2]); 
  }
  else if (array[1] === '3'){
    return 'thirty ' + simpleNumber(array[2]); 
  }
  else if (array[1] === '4'){
    return 'forty ' + simpleNumber(array[2]);
  }
  else if (array[1] === '5'){
    return 'fifty ' + simpleNumber(array[2]);
  }
  else if (array[1] === '8'){
    return 'eighty ' + simpleNumber(array[2]);
  }
  else if (array[1] !== '0') return (simpleNumber(array[1])+ 'ty ' + simpleNumber(array[2])).trim();
  else return (simpleNumber(array[1]) + simpleNumber(array[2])).trim()
  }
}
  if (splittedNumber.length === 1){
    if (splittedNumber[0] === '0') return 'zero';
   else return simpleNumber(splittedNumber[0]);
  }
  else if (splittedNumber.length === 2){
    return decim(splittedNumber).trim();
  }
  else if (splittedNumber.length === 3){
    return (simpleNumber(splittedNumber[0]) + ' hundred ' + decim(splittedNumber)).trim();
  }
}
