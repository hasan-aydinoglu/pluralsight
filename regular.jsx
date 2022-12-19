const X = function() {
  
  };
  
  const Y = () => {
 
  };
  
 
  
  const testerObj = {
    func1: function() {
      console.log('In func1', this);
    },
  
    func2: () => {
      console.log('In func2', this);
    }
  };
  
  testerObj.func1();
  testerObj.func2();
  
  
  display.log([1, 2, 3, 4].map(a => a * a));
  