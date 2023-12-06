function calcFacto(val) {
    if (val === 0 || val === 1) {
      return 1;
    } else {
      let facto = 1;
      for (let i = 2; i <= val; i++) {
        facto *= i;
      }
      return facto;
    }
  }
  
  const num = 7; 
  const result = calcFacto(num);
  console.log(`The factorial of is ${num}`, + result);