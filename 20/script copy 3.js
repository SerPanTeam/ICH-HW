async function fetchSource(params) {
  return params;
}
async function processData() {
  const promises = [fetchSource(1), fetchSource(2), fetchSource(3)];
  const responses = await Promise.all(promises);
  console.table(responses);
  for (let item of responses) {
    await saveProcessedData(item);
  }
}
async function saveProcessedData(data) {
  console.log("saveProcessedData " + data);
}
processData();
