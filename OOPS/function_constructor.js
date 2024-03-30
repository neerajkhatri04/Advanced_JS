function Product(n, p, d) {
  this.name = n;
  this.price = p;
  this.discription = d;
}

const p = new Product("LG", "10000", "LG TV 32inch");
console.log(p);
