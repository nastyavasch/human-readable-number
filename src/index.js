module.exports = function toReadable (number) {
  function simpleNumber (num){
    switch (num){
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
    };
  };
  let splittedNumber = number.split('');
  if (splittedNumber.length === 1){
    return simpleNumber(number);
  }
  if (splittedNumber.length === 2){
      if (splittedNumber[0]===1){
          if (number===11) return 'eleven';
          else if  (number === 12) return 'twelve';
          else if (number === 13) return 'thirteen';
          else return simpleNumber(splittedNumber[1]) + 'teen';
      }
  }
}
