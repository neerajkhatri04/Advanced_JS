class Product {
  name;
  price;
  discription;

  constructor(n, p, d) {
    this.name = n;
    this.price = p;
    this.discription = d;
    return 10; //ignore primitives
  }
  //No constructor overloading in JavaScript.
}

//new creates a plane object
//calling constructor wrt new as calling context
const p = new Product("TV", 10000, "Sony TV 32inch");
console.log(p);
