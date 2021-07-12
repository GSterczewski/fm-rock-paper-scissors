import wait from "./wait";

const fireFunctionMultipleTimes = (fn, count, delay = 0) => {
  let results = [];
  for(let i = 0; i < count; i++ ){
    results.push(wait(fn,delay*i));
  }
  return results;
};

export default fireFunctionMultipleTimes;