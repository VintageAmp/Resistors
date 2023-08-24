let colourNum = 0;
let colourOne = colourTwo = colourThree = colourFour = " ";
let num1 = num2 = num3 = num4 = num5 = 0;
let colourArray = [];
let numArray = [];

console.log("Θα σου υπολογίσω τα Ωm μιας αντιστασης. \nΠαρακαλώ δώσε μου τον αριθμό των χρωμάτων.");
do {    // 4 ή 5 ΧΡΩΜΑΤΑ
  colourNum = Number(prompt("4 ή 5 χρώματα? "));
} while (!(colourNum > 3 && colourNum < 6));

function userInput4() {
  console.log("\nΓραψε μου το γράμμα που αντιστοιχεί σε κάθε χρώμα σύμφωνα με τα παρακάτω: \n Μ για Μαύρο\t(0), \n Κ για Καφέ\t\t(1), \n Ν για Κόκκινο\t(2), \n Ο για Πορτοκαλί(3), \n Ι για Κίτρινο\t(4), \n R για Πράσινο\t(5), \n L για Μπλε\t\t(6), \n V για Μωβ\t\t(7), \n G για Γκρι\t\t(8), \n Α για Άσπρο\t(9), \n X για Χρυσαφί και \n S για Ασημένιο. \n Ε για 'κανένα' χρώμα\n\n");

  do {    //ΧΡΩΜΑ 1
    colourOne = prompt("Δώσε μου το 1ο χρώμα.");
  } while (!(colourOne == "m" || colourOne == "k" || colourOne == "n" || colourOne == "o" || colourOne == "i" || colourOne == "r" || colourOne == "l" || colourOne == "v" || colourOne == "g" || colourOne == "a" || colourOne == "x" || colourOne == "s" || colourOne == "e"));
  do {    //ΧΡΩΜΑ 2
    colourTwo = prompt("Δώσε μου το 2ο χρώμα.");
  } while (!(colourTwo == "m" || colourTwo == "k" || colourTwo == "n" || colourTwo == "o" || colourTwo == "i" || colourTwo == "r" || colourTwo == "l" || colourTwo == "v" || colourTwo == "g" || colourTwo == "a" || colourTwo == "x" || colourTwo == "s" || colourTwo == "e"));
  do {    //ΧΡΩΜΑ 3
    colourThree = prompt("Δώσε μου το 3ο χρώμα.");
  } while (!(colourThree == "m" || colourThree == "k" || colourThree == "n" || colourThree == "o" || colourThree == "i" || colourThree == "r" || colourThree == "l" || colourThree == "v" || colourThree == "g" || colourThree == "a" || colourThree == "x" || colourThree == "s" || colourThree == "e"));
  do {    //ΧΡΩΜΑ 4
    colourFour = prompt("Δώσε μου το 4ο χρώμα.");
  } while (!(colourFour == "m" || colourFour == "k" || colourFour == "n" || colourFour == "o" || colourFour == "i" || colourFour == "r" || colourFour == "l" || colourFour == "v" || colourFour == "g" || colourFour == "a" || colourFour == "x" || colourFour == "s" || colourFour == "e"));
}
function userInput5() {
  console.log("\nΓραψε μου το γράμμα που αντιστοιχεί σε κάθε χρώμα σύμφωνα με τα παρακάτω: \n Μ για Μαύρο\t(0), \n Κ για Καφέ\t\t(1), \n Ν για Κόκκινο\t(2), \n Ο για Πορτοκαλί(3), \n Ι για Κίτρινο\t(4), \n R για Πράσινο\t(5), \n L για Μπλε\t\t(6), \n V για Μωβ\t\t(7), \n G για Γκρι\t\t(8), \n Α για Άσπρο\t(9), \n X για Χρυσαφί και \n S για Ασημένιο. \n Ε για 'κανένα' χρώμα\n\n");

  do {    //ΧΡΩΜΑ 1
    colourOne = prompt("Δώσε μου το 1ο χρώμα.");
  } while (!(colourOne == "m" || colourOne == "k" || colourOne == "n" || colourOne == "o" || colourOne == "i" || colourOne == "r" || colourOne == "l" || colourOne == "v" || colourOne == "g" || colourOne == "a" || colourOne == "x" || colourOne == "s" || colourOne == "e"));
  do {    //ΧΡΩΜΑ 2
    colourTwo = prompt("Δώσε μου το 2ο χρώμα.");
  } while (!(colourTwo == "m" || colourTwo == "k" || colourTwo == "n" || colourTwo == "o" || colourTwo == "i" || colourTwo == "r" || colourTwo == "l" || colourTwo == "v" || colourTwo == "g" || colourTwo == "a" || colourTwo == "x" || colourTwo == "s" || colourTwo == "e"));
  do {    //ΧΡΩΜΑ 3
    colourThree = prompt("Δώσε μου το 3ο χρώμα.");
  } while (!(colourThree == "m" || colourThree == "k" || colourThree == "n" || colourThree == "o" || colourThree == "i" || colourThree == "r" || colourThree == "l" || colourThree == "v" || colourThree == "g" || colourThree == "a" || colourThree == "x" || colourThree == "s" || colourThree == "e"));
  do {    //ΧΡΩΜΑ 4
    colourFour = prompt("Δώσε μου το 4ο χρώμα.");
  } while (!(colourFour == "m" || colourFour == "k" || colourFour == "n" || colourFour == "o" || colourFour == "i" || colourFour == "r" || colourFour == "l" || colourFour == "v" || colourFour == "g" || colourFour == "a" || colourFour == "x" || colourFour == "s" || colourFour == "e"));
  do {    //ΧΡΩΜΑ 5
    colourFive = prompt("Δώσε μου το 5ο χρώμα.");
  } while (!(colourFive == "m" || colourFive == "k" || colourFive == "n" || colourFive == "o" || colourFive == "i" || colourFive == "r" || colourFive == "l" || colourFive == "v" || colourFive == "g" || colourFive == "a" || colourFive == "x" || colourFive == "s" || colourFive == "e"));
}

// ΑΠΟΡΙΑ ΜΕ ΤΟΥς ΑΡΙΘΜΟΥΣ ΠΟΥ ΑΛΛΑΖΕΙ ΕΝΑ FUNCTION. ΔΕΝ ΜΠΟΡΕΙ ΝΑ ΑΛΛΑΞΕΙ ΜΙΑ ΕΞΩΤΕΡΙΚΗ ΤΙΜΗ ΓΙΑ ΠΑΝΤΑ ? ΠΧ ΤΟ colourOne τα το κανει κατι άλλο
/*
function numConversion(colourEna) {
  switch (colourEna) {
    case "Μ": //για Μαύρο,
      colourEna = 0;
      break;
    case "Κ": // για Καφέ,
      colourEna = 1;
      break;
    case "Ν": // για Κόκκινο,
      colourEna = 2;
      break;
    case "Ο": //για Πορτοκαλί,
      colourEna = 3;
      break;
    case "Ι": //για Κίτρινο,
      colourEna = 4;
      break;
    case "R": //για Πράσινο,
      colourEna = 5;
      break;
    case "L": //για Μπλε,
      colourEna = 6;
      break;
    case "V": //για Μωβ,
      colourEna = 7;
      break;
    case "G": //για Γκρι,
      colourEna = 8;
      break;
    case "a": //για άσπρο
      colourEna = 9;
      break;
    case "X": //για Χρυσαφί και
      break;
    case "S": //για Ασημένιο.
      break;
    case "Ε": //για "κανένα" χρώμα
      break;
  }
}
*/
/*
function numConversion(colourEna) {
  if (colourEna == "Μ") { //για Μαύρο,
    colourEna = 0;
  } else if (colourEna == "Κ") { //για Καφέ,
    colourEna = 1;
  } else if (colourEna == "n") { //για Κόκκινο,
    colourEna = 2;
  } else if (colourEna == "o") { //για Πορτοκαλί,
    colourEna = 3;
  } else if (colourEna == "i") { //για Κίτρινο,
    colourEna = 4;
  } else if (colourEna == "r") { //για Πράσινο,
    colourEna = 5;
  } else if (colourEna == "l") { //για Μπλε,
    colourEna = 6;
  } else if (colourEna == "v") { //για Μωβ,
    colourEna = 7;
  } else if (colourEna == "g") { //για Γκρι,
    colourEna = 8;
  } else if (colourEna == "a") { //για Άσπρο,
    colourEna = 9;
  }
}
*/
function numConversion(colourEna) {
  let numX = 0;
  if (colourEna == "m") { //για Μαύρο,
    numX = 0;
  } else if (colourEna == "k") { //για Καφέ,
    numX = 1;
  } else if (colourEna == "n") { //για Κόκκινο,
    numX = 2;
  } else if (colourEna == "o") { //για Πορτοκαλί,
    numX = 3;
  } else if (colourEna == "i") { //για Κίτρινο,
    numX = 4;
  } else if (colourEna == "r") { //για Πράσινο,
    numX = 5;
  } else if (colourEna == "l") { //για Μπλε,
    numX = 6;
  } else if (colourEna == "v") { //για Μωβ,
    numX = 7;
  } else if (colourEna == "g") { //για Γκρι,
    numX = 8;
  } else if (colourEna == "a") { //για Άσπρο,
    numX = 9;
  }
  return numX;
}


function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'KΩ'; // convert to K for number from > 1000 < 1 million 
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + 'MΩ'; // convert to M for number from > 1 million 
  } else if (num < 900) {
    return String(num); // if value < 1000, nothing to do
  }
}

switch (colourNum) {

  case 4:
    userInput4();
    colourArray = [colourOne, colourTwo, colourThree, colourFour];
    numArray = [num1, num2, num3, num4];
    console.log("\n");

    for (i = 0; i < 4; i++) {
      numArray[i] = numConversion(colourArray[i]);
      console.log("χρώμα " + [i + 1] + " = " + numArray[i]);
    }

    numArray[0] = numArray[0] * 10;
    apotelesma = numArray[0] + numArray[1];

    function multiplier4(apotelesma) {
      let mult = 0;
      if (colourArray[2] == "x") {
        mult = 0.1;
      } else if (colourArray[2] == "s") {
        mult = 0.01;
      } else {
        mult = Math.pow(10, numArray[2]);
      }
      return (apotelesma * mult).toFixed(2);
    }
    /*
    return [mult, (apotelesma * mult).toFixed(2)]; // ετσι παιρνω 2 τιμες στο return (επισης μπορω να χω σε διάφορα σημεία return αλλά θα φύγει απτο function και δεν θα διαβάσει τίποτε απτα παρακάτω
  }
  */

    apotelesma = multiplier4(apotelesma);
    apotelesma = numFormatter(apotelesma);

    function anoxi4(apotelesma, colourArray) {
      if (colourArray[3] == "x") {
        return apotelesma += " +/- 5% ";
      } else if (colourArray[3] == "s") {
        return apotelesma += " +/- 10% ";
      }
      else {
        return apotelesma += " +/- 20% ";
      }
    }
    
    console.log("\n");
    apotelesma = anoxi4(apotelesma, colourArray);
    console.log("Η αντίστασή σου είναι " + apotelesma);
    break;



  case 5:
    userInput5();
    colourArray = [colourOne, colourTwo, colourThree, colourFour, colourFive];
    numArray = [num1, num2, num3, num4, num5];
    console.log("\n");

    for (i = 0; i < 5; i++) {
      numArray[i] = numConversion(colourArray[i]);
      console.log("χρώμα " + [i + 1] + " = " + numArray[i]);
    }
    apotelesma = 0;

    numArray[0] = numArray[0] * 100;
    numArray[1] = numArray[1] * 10;
    apotelesma = numArray[0] + numArray[1] + numArray[2];

    function multiplier5(apotelesma, colourArray) {
      let mult = 0;
      if (colourArray[3] == "x") {
        mult = 0.1;
      } else if (colourArray[3] == "s") {
        mult = 0.01;
      } else {
        mult = Math.pow(10, numArray[3]);
      }
      return (apotelesma * mult).toFixed(2);
    }

    function anoxi5(apotelesma, colourArray) {
      if (colourArray[4] == "k") { //για Καφέ,
        apotelesma += " +/- 1% ";
      } else if (colourArray[4] == "n") { //για Κόκκινο,
        apotelesma += " +/- 2% ";
      } else if (colourArray[4] == "o") { //για Πορτοκαλί,
        apotelesma += " +/- 3% ";
      } else if (colourArray[4] == "i") { //για Κίτρινο,
        apotelesma += " +/- 4% ";
      } else if (colourArray[4] == "r") { //για Πράσινο,
        apotelesma += " +/- 0.5% ";
      } else if (colourArray[4] == "l") { //για Μπλε,
        apotelesma += " +/- 0.25% ";
      } else if (colourArray[4] == "v") { //για Μωβ,
        apotelesma += " +/- 0.10% ";
      } else if (colourArray[4] == "g") { //για Γκρι,
        apotelesma += " +/- 0.05% ";
      } else if (colourArray[4] == "x") {
        apotelesma += " +/- 5% ";
      } else if (colourArray[4] == "s") {
        apotelesma += " +/- 10% ";
      }
      return apotelesma;
    }
    
    apotelesma = multiplier5(apotelesma, colourArray);
    apotelesma = numFormatter(apotelesma);
    apotelesma = anoxi5(apotelesma, colourArray);
    console.log("\nΗ αντίστασή σου είναι " + apotelesma);
    break;
}
