


$(document).ready(function(){

  $("form#userInput").submit(function(event) {
    event.preventDefault();

    // Check to insure number is an integer

    var inputIntegerNumber = parseFloat($("#initalInput").val());




    function isWholeNumber(x) {
      if (Number.isInteger(x)) {
        return 'Fits!';
      }
      return 'Does NOT fit!';
    }


    // Check to insure number is less than 3999

    function lessThan(a) {
      if (a > 3999) {
        return "number too big";
      } else {
        return "number good";
      }
    }


    // put number into an array, then split into one, tens, hundreds and thousands positions for conversion

    var stringNumber = inputIntegerNumber.toString();
    var splitArray = (stringNumber).split('');

    var romanOnes = [" ","I","II","III","IV","V", "VI", "VII", "VIII", "IX"]
    var romanTens = [" ","X","XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    var romanHundreds = [" ","C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    var romanThousands = [" ","M", "MM", "MMM"]



    // console.log(splitArray);
    for (var i=0; i<=splitArray.length; i++){

      splitArray.pop();


      // i=1 fills in ones position
      if (i === 1){

      var parsedSplitArray = parsedInt((splitArray[i]).val())
      console.log(romanOnes, splitArray, parsedSplitArray);

        var finalRomansOnes = romanOnes[parsedSplitArray];

        console.log(finalRomansOnes);
      }


      // i=2 fills in tens position
      else if (i === 2){
        var finalRomansTens = romanTens[splitArray[i]];
      }


      // i=3 fills in hundreds  position
      else if (i === 3) {
        var finalRomansHundreds = romanHundreds[splitArray[i]];
      }

      // i=4 fills in thousands  position
      else if (i === 4) {
        var finalRomansThousands = romanThousands[splitArray[i]];
      }

        // } else {
          //   return "Try again";
          // }
      console.log(finalRomansOnes);
        }





      });

    });
