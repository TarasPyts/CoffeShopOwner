import { Barista } from './barista.js';

export class CoffeShop {
  barista = [];
  menu = new Set();
  constructor(name, address, menu, barista) {
    this.name = name;
    this.address = address;
    this.menu.add(menu);
    this.barista.push(new Barista(barista, '', this));
    this.order = 0;
  }

  addMenuItem(item) {
    if (this.menu.has(item)) {
      console.log(`Item ${item} already exists in the menu`);
    } else {
      this.menu.add(item);
      console.log(`I added item ${item} to the menu`);
    }
  }

  removeMenuItem(item) {
    if (this.menu.has(item)) {
      this.menu.delete(item);
      console.log(`I removed item ${item} from the menu`);
    } else {
      console.log(`Item ${item} does not exist in the menu`);
    }
  }

  hireBarista(barista) {
    const newBarista = new Barista(barista, '', this);

    this.barista.push(newBarista);
    console.log(`I hired a barista ${barista}`);
    return newBarista;
  }

  fireBarista(name) {
    if (!this.checkIfBarista()) {
      return;
    }
    const index = this.barista.findIndex((barista) => barista.name === name);
    if (index === -1) {
      console.error(`Cannot find barista with name ${name} in the shop`);
    } else {
      this.barista.splice(index, 1);
      console.log(`I fired a barista named ${name}`);
    }
  }

  makeCoffee() {
    if (!this.checkIfBarista()) {
      return;
    }
    this.orderIncrease();
    let random = this.barista[Math.floor(Math.random() * this.barista.length)];
    console.log(`${random.name} made a coffee`);
  }

  takeOrder(order) {
    if (!this.checkIfBarista()) {
      return;
    }
    let random = this.barista[Math.floor(Math.random() * this.barista.length)];
    if (this.menu.has(order)) {
      console.log(`${random.name} took an order ${order}`);
    } else {
      console.log('There is no such position in a menu');
    }
  }

  serveCustomer(order) {
    if (!this.checkIfBarista()) {
      return;
    }
    this.orderIncrease();
    console.log(this.order);
    let random = this.barista[Math.floor(Math.random() * this.barista.length)];
    console.log(
      `${random.name} served a customer with his ${order ? order : 'order'}`
    );
  }

  calculateMonthlyProfit() {
    console.log((this.order *= 30));
  }

  orderIncrease() {
    this.order += 1;
  }

  checkIfBarista() {
    if (this.barista.length === 0) {
      console.error('Please hire a barista');
      return false;
    }
    return true;
  }
}
