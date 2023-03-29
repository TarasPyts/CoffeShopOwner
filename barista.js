export class Barista {
  #experience;
  constructor(name, experience, coffeShop) {
    this.name = name;
    this.#experience = experience;
    this.coffeShop = coffeShop;
  }

  selectCoffeShop(name) {
    this.coffeShop = name;
  }

  makeCoffee() {
    if (!this.checkShop()) {
      return;
    }
    this.coffeShop.makeCoffee();
    console.log('I made a coffe');
  }

  takeOrder(order) {
    if (!this.checkShop()) {
      return;
    }
    console.log(`I took order: ${order ? order : 'order'}`);
  }

  serveCustomer(order) {
    if (!this.checkShop()) {
      return;
    }
    this.coffeShop.serveCustomer();
    console.log(`I served a cusotmer with his ${order ? order : 'order'}`);
  }

  quitJob() {
    console.log('I quited');
    this.coffeShop = null;
  }

  checkShop() {
    if (!this.coffeShop) {
      console.error(`${this.name} you first find a CoffeShop`);
      return false;
    }
    return true;
  }
}
