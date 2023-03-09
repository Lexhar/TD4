function multiplication(a, b) {
    let resultat = 0;
    for(let i = 0; i < b; i++) {
      resultat += a;
    }
    return resultat;
  }

  
  function division(a, b) {
    let quotient = 0;
    while (a >= b) {
      a -= b;
      quotient++;
    }
    return quotient;
  }
  
  function puissance(a, b) {
    let resultat = 1;
    for(let i = 0; i < b; i++) {
      resultat *= a;
    }
    return resultat;
  }
  