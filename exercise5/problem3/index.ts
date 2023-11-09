async function printAsyncNumbers(n: number) {
  for (let i = 1; i <= n; i++) {
    await delay(i * 1000);
    console.log(i);
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const n = 10;
printAsyncNumbers(n);

export default printAsyncNumbers;