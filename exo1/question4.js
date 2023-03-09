let nombreDeNotes = prompt("Combien de notes souhaitez-vous entrer ?");
let somme = 0;

for (let i = 1; i <= nombreDeNotes; i++) {
  let note = parseFloat(prompt("Entrez la note numéro " + i));
  if (!isNaN(note)) {
    somme += note;
  }
}

let moyenne = somme / nombreDeNotes;

alert("La moyenne est de " + moyenne.toFixed(2));
