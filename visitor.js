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
    if (!this.checkCoffeShop()) {
      return;
    }

    if (this._selectCoffeshop.menu.has(drink)) {
      console.log(`I placed an order ${drink}`);
    } else {
      console.log('There is no such position in a menu');
    }
    this._selectCoffeshop.orderIncrease();
  }

  drinkCoffee(drink) {
    if (!this.checkCoffeShop()) {
      return;
    }
    console.log(
      `I'm drinking my ${drink === this.#favoriteCoffe ? 'favorite' : 'coffee'}`
    );
  }

  checkCoffeShop() {
    if (this._selectCoffeshop === null) {
      console.error(`You first find a CoffeShop`);
      return false;
    }
    return true;
  }
}
