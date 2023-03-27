import { CoffeShop } from './coffeshop.js';
import { Barista } from './barista.js';

export class Owner {
  constructor(name, address, profitLevel) {
    this.name = name;
    this.address = address;
    this.profitLevel = profitLevel;
    this.shop = [];
  }

  setProfitLevel(profit) {
    this.profitLevel = profit;
  }

  getProfitLevel() {
    console.log(this.profitLevel * 30);
  }

  hireBarista(barista) {
    this.checkShopExists();

    const newBarista = new Barista(barista);

    this.shop.barista.push(newBarista);
    console.log(`I hired a barista ${barista}`);
    return newBarista;
  }

  fireBarista(name) {
    this.checkShopExists();

    const baristas = this.shop.barista;

    if (!baristas.length) {
      console.error(`There is no barista`);
      return;
    }

    const index = baristas.findIndex((barista) => barista.name === name);

    if (index === -1) {
      console.error(`Cannot find barista with name '${name}' in the shop`);
      return;
    }

    const firedBarista = baristas.splice(index, 1)[0];
    console.log(`I fired a barista named '${name}'`);
    return firedBarista;
  }

  addCoffeeShop(coffeeShop) {
    const newCoffeShop = new CoffeShop(coffeeShop);
    this.shop.push(newCoffeShop);
    console.log('I made a CoffeShop');
    return newCoffeShop;
  }

  removeCoffeShop(coffeeShop) {
    const index = this.shop.findIndex((shop) => shop.name === coffeeShop);
    if (index === -1) {
      console.error(`Cannot find CoffeeShop with name '${coffeeShop}'`);
      return;
    }
    const removedShop = this.shop.splice(index, 1)[0];
    console.log(`Removed coffee shop '${coffeeShop}'`);
    return removedShop;
  }

  calculateMonthlyProfit() {
    console.log(this.profitLevel * 30);
    return this.profitLevel * 30;
  }

  calculateAnnualProfit() {
    console.log(this.profitLevel * 365);
    return this.profitLevel * 365;
  }

  checkShopExists() {
    if (!this.shop) {
      console.error("You don't have any shop");
      return;
    }
  }

  showAllShops() {
    this.shop.forEach((shop) => console.log(shop));
  }
}
