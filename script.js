
        function appendToResult(value) {
            document.getElementById('result').value += value;
        }
        
         function deleteLastDigit() {
        var currentResult = document.getElementById('result').value;
        document.getElementById('result').value = currentResult.slice(0, -1);
       }


        function clearResult() {
            document.getElementById('result').value = '';
        }

        function calculateResult() {
            var result = document.getElementById('result').value;
            try {
                document.getElementById('result').value = eval(result);
            } catch (error) {
                document.getElementById('result').value = 'Error';

            }
        }
          
   
      document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent the default behavior of the Enter key
        calculateResult();
    }
});

function calculateResult() {
    var result = document.getElementById('result').value;
    try {
        var calculatedResult = Function('"use strict";return (' + result + ')')();
        document.getElementById('result').value = calculatedResult;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

     
    