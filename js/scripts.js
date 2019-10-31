// $(document).ready(function () {
  //   $("form#userInput").submit(function(event){
    //     var number = ('input#numberInput').val();
    //     var parsedNumber = parseInt(number);
    //
    //     console.log(number)

    $(document).ready(function(){

      $("form#userInput").submit(function(event) {
        event.preventDefault();


        var number = parseFloat($("#initalInput").val());
        console.log(number)

        function isWholeNumber(x) {
          if (Number.isInteger(x)) {
            return 'Fits!';
          }
          return 'Does NOT fit!';
        }

        console.log(isWholeNumber(number));
        // expected output: "NOT positive"




      });


    });
