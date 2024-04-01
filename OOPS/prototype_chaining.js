//When an object gets a request for a property that it does not have,
//its prototype will be searched for the property,
//then the prototype’s prototype, and so on.

let mainObject = {
  bar: 2,
};
// create an object linked to `anotherObject`
let myObject = Object.create(mainObject);
for (let k in myObject) {
  console.log("found: " + k); // found: bar
}

console.log("bar" in myObject); // true

//But, if bar weren’t found on myObject , its prototype chain, if nonempty,
//is again consulted and followed. This process continues until either a matching property name is found, or the prototype chain ends.
//If no matching property is ever found by the end of the chain, the return result from the operation is undefined.
