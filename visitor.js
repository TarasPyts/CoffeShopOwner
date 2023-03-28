export class Visitor {
  #name;
  #favoriteCoffe;
  constructor(name, favoriteCoffe) {
    this.#name = name;
    this.#favoriteCoffe = favoriteCoffe;
    this._selectCoffeshop = null;
  }

  selectCoffeShop(name) {
    this._selectCoffeshop = name;
    console.log(`I chose a ${this._selectCoffeshop.name} CoffeShop`);
  }

  placeOrder(drink) {
    if (this._selectCoffeshop.menu.has(drink)) {
      console.log(`I placed an order ${drink}`);
    } else {
      console.log('There is no such position in a menu');
    }
  }
  drinkCoffee(drink) {
    this._selectCoffeshop.orderIncrease();
    console.log(`I'm drinking my ${drink ? drink : 'coffee'}`);
  }
}
