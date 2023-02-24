function somme(...nombres) {
    let total = 0;
    for (let nombre of nombres) {
      total += nombre;
    }
    return total;
  }

  console.log(somme(1, 2, 3)); // affiche 6
console.log(somme(4, 5, 6, 7)); // affiche 22
console.log(somme(10)); // affiche 10
console.log(somme()); // affiche 0

  