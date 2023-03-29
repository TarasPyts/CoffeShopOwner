import { Owner } from './owner.js';
import { Barista } from './barista.js';
import { CoffeShop } from './coffeshop.js';
import { Visitor } from './visitor.js';

const sh = new CoffeShop('Ki', 'Centr', 'Latte', 'Petro');
console.log(sh);

const vi = new Visitor('Taras', 'Latte');
console.log(vi);
vi.selectCoffeShop(sh);
vi.placeOrder('Latte');
vi.drinkCoffee('Latte');
