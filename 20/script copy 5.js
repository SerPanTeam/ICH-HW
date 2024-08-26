async function fetchWether(server, timeout, status) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (status) {
        res(`Server ${server} response OK!`);
      } else {
        rej(`Server ${server} response ERROR!`);
      }
    }, timeout);
  });
}

async function getWeatherFromSources() {
  const promises = [
    fetchWether("A", 2000, false),
    fetchWether("B", 5000, true),
    fetchWether("C", 3000, false),
    fetchWether("D", 4000, true),
  ];
  Promise.race(promises).then((res) => {
    console.log(res);
  }).catch(err=>{
    console.log(err);
    
  });
}

async function getFirstSuccessfulWeatherResponse() {
  const promises = [
    fetchWether("A", 2000, false),
    fetchWether("B", 5000, true),
    fetchWether("C", 3000, false),
    fetchWether("D", 4000, true),
  ];
  Promise.any(promises).then((res) => {
    console.log(res);
  }).catch(err=>{
    console.log(err);
    
  });
}

getWeatherFromSources();
getFirstSuccessfulWeatherResponse();
