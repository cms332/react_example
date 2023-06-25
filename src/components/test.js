class Car {
  constructor(brand) {
    this.brandName = brand;
  }
  show() {
    return 'I have a ' + this.brandName;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return super.show() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
myCar.show();