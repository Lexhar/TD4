let nombre1 = prompt("Entrez un premier nombre :");
let nombre2 = prompt("Entrez un deuxième nombre :");

if ((nombre1 > 0 && nombre2 > 0) || (nombre1 < 0 && nombre2 < 0)) {
  alert("Le produit est positif.");
} else if (nombre1 == 0 || nombre2 == 0) {
  alert("Le produit est nul.");
} else {
  alert("Le produit est négatif.");
}

