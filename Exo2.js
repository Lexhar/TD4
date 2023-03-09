function findMostFrequentElement(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    var modeMap = {};
    var maxEl = arr[0], maxCount = 1;
  
    for (var i = 0; i < arr.length; i++) {
      var el = arr[i];
  
      if (modeMap[el] == null) {
        modeMap[el] = 1;
      } else {
        modeMap[el]++;
      }
  
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
  
    return maxEl;
  }
  
  var arr = [3, 'B', 'B', 'B', 2, 3, 4, 3, 'a', 2, 4, 9, 3, 3, 3];
  var mostFrequentElement = findMostFrequentElement(arr);
  console.log(mostFrequentElement + " (" + modeMap[mostFrequentElement] + " fois)");

  
  function getLastElement(arr, n) {
    // Si le tableau est vide, retourne null
    if (arr.length === 0) {
      return null;
    }
    
    // Si n n'est pas défini ou est supérieur à la longueur du tableau, retourne le dernier élément
    if (n === undefined || n >= arr.length) {
      return arr[arr.length - 1];
    }
    
    // Sinon, retourne les n derniers éléments du tableau
    return arr.slice(Math.max(arr.length - n, 0));
  }
  
  // Exemple d'utilisation
  var arr = [1, 2, 3, 4, 5];
  console.log(getLastElement(arr));    // Sortie : 5
  console.log(getLastElement(arr, 3)); // Sortie : [3, 4, 5]
  