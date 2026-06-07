// A program to make a product class

class KCStore {
  constructor() {
    this.products = [];
  }

  //Add a product
  addProduct(product) {
    this.products.push(product);
    console.log("Product Added");
    return product;
  }

  //   View All Products
  viewProducts() {
    console.log(this.products);
    return this.products;
  }

  updateProduct(id, newName, newPrice) {
    const product = this.products.find((item) => item.id === id);

    if (product) {
      product.name = newName;
      product.price = newPrice;
      console.log("Product Updated");
    } else {
      console.log("Product not found");
    }

    return product;
  }

  // Delete a product
  deleteProduct(id) {
    const productExists = this.products.find((product) => product.id === id);

    if (!productExists) {
      console.log("Product not found");
      return null;
    }

    this.products = this.products.filter((product) => product.id !== id);
    console.log("Product deleted");
    return productExists;
  }
}

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Usage
const store = new KCStore();
const product1 = new Product(1, "Laptop", 1500);
const product2 = new Product(2, "Phone", 800);

store.addProduct(product1);
store.addProduct(product2);
store.viewProducts();
store.updateProduct(1, "Gaming Laptop", 2000);
store.deleteProduct(2);
