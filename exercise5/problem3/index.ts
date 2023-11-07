function printAsyncNumbers(n: number) {
  let i = 1;
  const interval = setInterval(() => {
    console.log(i);
    i++;
    if (i > n) {
      clearInterval(interval);
    }
  }, 1000);
}

printAsyncNumbers

export default printAsyncNumbers;