/* Assign/declare variables. We started you off with some variables to help you.
Hint: We need:
      (1) a variable for keeping track of the total number,
      (2) the string value that is shown on the display screen
      (3) the operator (+, x, -, and ÷) that is selected.  */
      
      let total = 0;
      let strbuffer = "0";
      let operator =null;
      
      /*  FUNC DESCRIPTION: Operator calculations. Create the in +, x, -, and ÷ operator calculations. The plus operator is done for you!
          Uncomment and fill in the blank spaces. */

      function calculations() {
          const intBuffer = parseInt(strbuffer); // Hint: Use parseInt to convert string to integer
          if (operator === "+") {
              total += intBuffer;
          } else if (operator === "-") {
              total -= intBuffer; 
          } else if (operator === "/") {
              total /= intBuffer;
          } else (operator === "x") {
              total *= intBuffer;
          }
          console.log(total); 
          return total;
      }
 
      
      /*   FUNC DESCRIPTION: If user input is a number, create the function. */

      function makesNumber(value) {
          if (strbuffer === "0") {
              strbuffer = value;
          } else {
              strbuffer = value + strbuffer
              
          /*  If strbuffer is not 0, meaning there is a previous number typed in already, what should we display on the screen?
          Hint: How do we concatenate strings? If you are stuck, imagine typing in a "5" into the calculator, making strbuffer into "5". 
          Then imagine typing "3" into the calculator. Now "3" is value and strbuffer is still at "5", so strbuffer will now be 53.  */
              // ____________________
          } 
          return strbuffer;
      }
      
      /*  FUNC DESCRIPTION: If user input is not a number, create the function. Create the functionality for "C", "←", "=", and operators. */
      
      function makesSymbol(symbol) {
          //make functionality for symbol C
          //make functionality for symbol ← Hint: .substring might be helpful! 
          //make functionality for symbol = Hint: use operator variable. Also call a function we created already!
          //...
          if  (symbol === "C") {
              strbuffer = "0";
              total = 0;
          } else if (symbol === "del" ) {
              if (parseInt(strbuffer) < 1) {
                  strbuffer = 0
                } else {
                    strbuffer = strbuffer.substring(0, strbuffer.length-1)
                }
            } else if (symbol === "=") {
                strbuffer = calculations()
                total = 0
            }
          
          else { //make functionality if symbol is an operator
          const intBuffer = parseInt(strbuffer);
          if (total === 0) {
              total = intBuffer;
          } else {
              total = calculations();
          }
          operator = symbol;
          strbuffer = "0";
          }
      }
      
      /*  FUNC DESCRIPTION: Write the function to set listeners. This is how we will make the HTML interactive with the JS!
          This is where we sense when a user clicks a certain button and send this information to our buttonClicked function. */
     
    function setListeners() {

      //Hint: We want to select all buttons from html and make it so that something happens when you click on the buttons! querySelectorAll might be helpful
          
      let elements = document.querySelectorAll('.buttons'); 
          for (item of elements) {
              let iT = item.innerText;
              item.addEventListener('click', function () {
                  buttonClicked (iT)
              } )

          //Hint: addEventListener might be useful.
          //Hint: event.target.innerText might be helpful. innerText return type is a string
          
        }
      }
      
      setListeners ();

      //Make sure to call setListeners!!!
      ________________________
      
      /*  FUNC DESCRIPTION: Now we will write the function that takes care of when a button is clicked. */
      
      function buttonClicked(valueClicked) {
          let total = 0;
          if (isNaN(parseInt(valueClicked))) { //NaN means "Not a Number"
            calc = makesSymbol(valueClicked);  
            
            //Hint: call a function we just created!

          } else {
              total = makesNumber(valueClicked);

              //Hint: call a function we just created!

          }
         strbuffer = total;

      // Hint: we need to change what number appears on the screen! to change html, one listener you could use is querySelector
      }