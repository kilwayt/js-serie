
//ex1

// function additionner(nombre1, nombre2) {
//     return nombre1 + nombre2;
//   }
  
//   const resultat = additionner(5, 3);
//   console.log(resultat); 
  //ex2
//   function minutesEnSecondes(minutes) {
//     return minutes * 60;
//   }
  
//   const minutes = 5;
//   const secondes = minutesEnSecondes(minutes);
//   console.log(`${secondes} `);

  //ex3

//   function increment(nombre) {
//     return nombre + 1;
//   }
  
 
//   const resultat = increment(10);
//   console.log(resultat); 

  //ex4

//   function getSurface(base, hauteur) {
//     const surface = (base * hauteur) / 2;
//     return surface;
//   }
  
//   const surface1 = getSurface(8, 2);
//   console.log(surface1); 
  
//   const surface2 = getSurface(7, 3);
//   console.log(surface2); 

  //ex5
//   function strReverse(chaine) {
//     return chaine.split('').reverse().join('');
//   }
  
  
//   const chaine1 = 'ilyas';
//   console.log(strReverse(chaine1)); 

  //ex6 

//   function getMax(a, b, c) {
//     if (a >= b && a >= c) {
//       return a;
//     } else if (b >= a && b >= c) {
//       return b;
//     } else {
//       return c;
//     }
//   }
  
//   const max1 = getMax(5, 9, 1);
//   console.log(max1); 
  
//   const max2 = getMax(2, 3, 10);
//   console.log(max2); 

  //ex7
  function premierElementDuTableau(tableau) {
    return tableau[0];
  }
  
  const monTableau = [5, 9, 12, 3];
  const premierElement = premierElementDuTableau(monTableau);
  console.log(premierElement);
  
  const tableauVide = [];
  const premierElementVide = premierElementDuTableau(tableauVide);
  console.log(premierElementVide);

  //ex8

//   const urlDuSite = window.location.href;
// console.log("URL du site Web : " + urlDuSite);  


//ex9

function remainderDivide(number1, number2) {
    return number1 % number2;
  }
  
  // Example usage:
  const result1 = remainderDivide(1, 3);
  console.log(result1); // This will display 1 in the console
  
  const result2 = remainderDivide(2, 4);
  console.log(result2); // This will display 2 in the console
  
  const result3 = remainderDivide(3, 3);
  console.log(result3); // This will display 0 in the console
  


  
  
  
  

  
  

  
  
  