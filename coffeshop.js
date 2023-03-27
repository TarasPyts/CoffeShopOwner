import { Barista } from './barista.js';

export class CoffeShop {
  constructor(name, address, menu, barista) {
    this.name = name;
    this.address = address;
    this.menu = new Set();
    this.barista = barista = [];
    this.order = 0;
  }

  addMenuItem(item) {
    if (this.menu.has(item)) {
      console.log(`Item '${item}' already exists in the menu`);
    } else {
      this.menu.add(item);
      console.log(`I added item '${item}' to the menu`);
    }
  }

  removeMenuItem(item) {
    if (this.menu.has(item)) {
      this.menu.delete(item);
      console.log(`I removed item '${item}' from the menu`);
    } else {
      console.log(`Item '${item}' does not exist in the menu`);
    }
  }

  hireBarista(barista) {
    const newBarista = new Barista(barista);

    this.barista.push(newBarista);
    console.log(`I hired a barista ${barista}`);
    return newBarista;
  }

  fireBarista(name) {
    const baristas = this.barista;

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

  makeCoffee() {
    this.order += 1;
    console.log('I made a coffee');
  }

  takeOrder(order) {
    if (this.menu.has(order)) {
      console.log(`I took an order ${order}`);
    } else {
      console.log('There is no such position in a menu');
    }
  }

  serveCustomer(order) {
    this.order += 1;
    console.log(this.order);
    console.log(`I served a customer with his ${order}`);
  }

  calculateMonthlyProfit() {
    console.log((this.order *= 30));
  }
}
