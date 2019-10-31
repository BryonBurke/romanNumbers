

    $(document).ready(function(){

      $("form#userInput").submit(function(event) {
        event.preventDefault();

        // Check to insure number is an integer

        var inputIntegerNumber = parseFloat($("#initalInput").val());
        var numberArray = []

        var loadArray = numberArray.push(inputIntegerNumber);


        console.log(numberArray);


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




      });

    });
