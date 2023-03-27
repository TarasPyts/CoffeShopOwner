export class Visitor {
  constructor(name, favoriteCoffe) {
    this.name = name;
    this.favoriteCoffe = favoriteCoffe;
    this._selectCoffeshop = null;
    this._selectBarista = null;
  }

  selectCoffeShop(name) {
    this._selectCoffeshop = name;
  }

  setBarista(name) {
    this._selectBarista = name;
  }

  placeOrder(drink) {
    this._selectCoffeshop.takeOrder(drink);
  }
  drinkCoffee(drink) {
    this._selectCoffeshop.serveCustomer(drink);
    this._selectBarista = null;
  }
}
