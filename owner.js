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
    if (!this.checkShopExists()) {
      return;
    }
    const newBarista = new Barista(barista);

    this.shop.forEach((coffeShop) => coffeShop.barista.push(newBarista));
    console.log(`I hired a barista ${barista}`);
    return newBarista;
  }

  fireBarista(name) {
    if (!this.checkShopExists()) {
      return;
    }

    this.shop.forEach((coffeeShop) => {
      const index = coffeeShop.barista.findIndex(
        (barista) => barista.name === name
      );
      if (index !== -1) {
        coffeeShop.barista.splice(index, 1);
        console.log(`Barista ${name} has been fired.`);
      } else {
        console.log(`Barista ${name} was not found in any CoffeeShop.`);
      }
    });
  }

  addCoffeeShop(coffeeShop) {
    const newCoffeShop = new CoffeShop(coffeeShop);
    this.shop.push(newCoffeShop);
    console.log(`I made a CoffeShop ${coffeeShop}`);
    return newCoffeShop;
  }

  removeCoffeShop(coffeeShop) {
    const index = this.shop.findIndex((shop) => shop.name === coffeeShop);
    if (index === -1) {
      console.error(`Cannot find CoffeeShop with name '${coffeeShop}'`);
    } else {
      this.shop.splice(index, 1);
      console.log(`Removed coffee shop '${coffeeShop}'`);
    }
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
    if (this.shop.length === 0) {
      console.error('Please add a shop');
      return false;
    }
    return true;
  }

  showAllShops() {
    this.shop.forEach((shop) => console.log(shop));
  }
}
