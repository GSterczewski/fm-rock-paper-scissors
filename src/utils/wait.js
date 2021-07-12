const wait = (fn,delay) => new Promise(( resolve ) => {
  setTimeout(()=>{
    resolve(fn());
  },delay)
});


export default wait;