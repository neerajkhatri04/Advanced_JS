Promise.resolve("foo")
  //Resolve the promise immediately with value "foo"
  .then(
    (
      string //Returns a new promise
    ) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar"; //string = "foobar"
          resolve(string); //value = "foobar"
        }, 5000);
      })
  )
  //wait(5 sec) for the previous promise to resolve
  .then((string) => {
    //value = "foobar"
    //Asyn code? dont wait.. push in Event Queue
    setTimeout(() => {
      string += "baz"; //string = "foobarbaz"
      console.log(string); // foobarbaz
    }, 5000); //5 sec timer in browser runtime
    return string; //Direct return the fullfill handler with
    //value string "foobar
  })
  .then((string) => {
    console.log(
      "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising"
    );
    console.log(string); // foobar
  }); //Callstack empty?? Microtack queue empty?? execute
//setTimeout function
// Logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
