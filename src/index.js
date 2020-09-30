
exports.min = function min (array) {
 if (array === undefined || array.length === 0) return 0;
  
  let arrayMin = [],
  i = 0;
    while (i < array.length) {
      if (typeof array[i] === "number") {
        arrayMin.push(array[i]);
      }
      i++;
    }
    return Math.min(...arrayMin);
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0;
  
    let arrayMin = [],
    i = 0;
    while (i < array.length) {
      if (typeof array[i] === "number") {
        arrayMin.push(array[i]);
      }
      i++;
    }
    return Math.max(...arrayMin);
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) return 0;

    let i = 0,
    sumNumber = 0,
    n = 0;
    while (i < array.length) {
      if (typeof array[i] === "number") {
        sumNumber += array[i];
        n++;
      }
      i++;
    }
    return sumNumber / n;
}