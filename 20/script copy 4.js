async function* generateNumbers() {
  for (let i = 1; i < 6; i++) {
    yield i;
  }
}

async function processNumbers(){
  for await(const num of generateNumbers()){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(num);
  }
}

processNumbers();