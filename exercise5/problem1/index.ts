function callbackExec(callback: () => void) {
    setTimeout(callback, 2000); // 2000 milliseconds = 2 seconds
  }
  
  function displayHello() {
    console.log('Hello');
  }
  
  callbackExec(displayHello);

export default callbackExec;
