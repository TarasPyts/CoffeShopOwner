export class Barista {
  #experience;
  constructor(name, experience, coffeShop) {
    this.name = name;
    this.#experience = experience;
    this.coffeShop = coffeShop = null;
  }

  selectCoffeShop(name) {
    this.coffeShop = name;
  }

  makeCofdee() {
    this.checkShop();
    this.coffeShop?.makeCoffee();
  }

  takeOrder(order) {
    this.checkShop();
    this.coffeShop?.takeOrder(order);
  }

  serveCustomer(order) {
    this.checkShop();
    this.coffeShop?.serveCustomer(order);
  }

  quitJob() {
    this.checkShop();
    this.coffeShop = null;
  }

  static checkShop() {
    if (!this.coffeShop) {
      console.error(`${this.name} you first find a CoffeShop`);
    }
  }
}
