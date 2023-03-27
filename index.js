import { Owner } from './owner.js';
import { Barista } from './barista.js';
import { CoffeShop } from './coffeshop.js';
import { Visitor } from './visitor.js';

// const ow = new Owner();
// ow.addCoffeeShop('Kava');
// console.log(ow);

const ca = new CoffeShop('Kava');
console.log(ca);
ca.hireBarista('Petro');
ca.addMenuItem('k2');

const ba = new Barista('Petro');

const vi = new Visitor('Taras', 'Kava');
console.log(vi);

vi.selectCoffeShop(ca);
vi.setBarista(ba);
console.log(vi);
vi.placeOrder('k2');
// vi.drinkCoffee('cof');
console.log(vi);
