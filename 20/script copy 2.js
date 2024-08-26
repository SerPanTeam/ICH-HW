async function fetchUserData() {
  return "fetchUserData - ok";
}
async function processUserData() {
  return "processUserData - ok";
}
async function saveUserData() {
  //throw new Error("saveUserData - error");
  return "saveUserData - ok";
}
async function getAllData() {
  try {
    const res1 = await fetchUserData();
    console.log(res1);
    const res2 = await processUserData();
    console.log(res2);
    const res3 = await saveUserData();
    console.log(res3);
  } catch (error) {
    console.error(error);
  }
}
getAllData();
