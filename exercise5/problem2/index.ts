
function printNumberInInterval() {
  let count = 1;
  const intervalId = setInterval(() => {
      console.log(count);
      count++;
      if (count > 10) {
          clearInterval(intervalId);
      }
  }, 1000);
}

printNumberInInterval();

export default printNumberInInterval;
