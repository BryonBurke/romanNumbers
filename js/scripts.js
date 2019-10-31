

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



    console.log(splitArray);


    for (var i=0; i=splitArray.length; index ++){
      var allRoman = splitArray.indexOf();

  }
      var indexVal = splitArray[i-1];



      if (splitArray.length = 1){

      } else if{}




    var romanOnes = ["I","II","III","IV","V", "VI", "VII", "VIII", "IX"]
    var romanTens = ["X","XX", "XXX", "XL", "L", "LX", "LXX", "LXXX" "XC"]
    var romanHundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    var romanThousands = ["M", "MM", "MMM"]
  });

});
