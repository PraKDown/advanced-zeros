module.exports = function getZerosCount(number, base) {
  let logic = true;
  let factor = [];
  let i = 2;
  while (logic) {
	  if( base % i == 0) {
		  factor.push(i);
		  if (base / i != 1) { 
			  base = base / i; 
			  i = i - 1; }
		  else logic = false;
	  }
	  i++;
  }
  let result = [];
  for (let j = 0; j < factor.length; j++) { 
    if (factor[j] == 0) continue;
    logic = true;
    let sum = 0;
    m = 1;
    while(logic) {
      m = m * factor[j]
      sum = sum + Math.floor(number / m);
      if (Math.floor(number / m) < 1) logic = false;
    }
    let count = 1;
    for (let i = j+1; i < factor.length; i++) {
      if (factor[j] == factor[i]) {
        count++;
        factor[i] = 0;
      }
    }
    result.push(Math.floor(sum/count));
  }
  return min = Math.min(...result);
}