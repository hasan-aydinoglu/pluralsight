const answer = 42;
const greeting = 'Hello';


const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};


  
  if (true) {
    //Block Scope
  }
  
  for (var i = 1; i <= 10; i++) {
    //Block Scope
  }
  
  function sum(a, b) {
    // Function Scope
    var result = a + b;
  }
  
  sum(4 + 3);
  