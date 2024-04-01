class Product {
  #name;
  price;
  discription;

  constructor(n, p, d) {
    this.name = n;
    this.price = p;
    this.discription = d;
    return 10; //ignore primitives
  }

  set name(n) {
    if (n !== "string") this.#name = n;
  }
  get name() {
    return this.#name;
  }
}

const p = new Product("TV", 10000, "Sony TV 32inch");
console.log(p);
console.log(p.name);
p.name = "Private TV";
console.log(p);
console.log(p.name);
