export class Barista {
  constructor(name, experience, coffeShop) {
    this.name = name;
    this.experience = experience;
    this.coffeShop = coffeShop;
    this._selectCoffeshop = null;
  }

  selectCoffeShop(name) {
    this._selectCoffeshop = name;
  }

  makeCofdee() {
    console.log('I made a coffee');
  }

  takeOrder(order) {
    this._selectCoffeshop.takeOrder(order);
  }

  serveCustomer(order) {
    this._selectCoffeshop.serveCustomer(order);
  }

  quitJob() {
    this._selectCoffeshop = null;
  }
}
