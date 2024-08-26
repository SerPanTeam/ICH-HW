async function fetchDataWithErrorHandling() {
  const result = Math.random();
  if (result > 0.3) return result;
  else throw new Error(result);
}

async function getResults() {
  for (let i = 0; i < 10; i++) {
    try {
      console.log(await fetchDataWithErrorHandling());
    } catch (error) {
      console.log(error);
    }
  }
}
getResults();
