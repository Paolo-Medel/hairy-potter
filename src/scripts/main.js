// Imports go first
import { makePottery } from "./Potterywheel.js";

// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 2, 3);
const plate = makePottery("plate", 2, 3);
const pot = makePottery("pot", 2, 3);
const vase = makePottery("vase", 2, 3);
const doll = makePottery("doll", 2, 3);

console.log(mug);
console.log(plate);
console.log(pot);
console.log(vase);
console.log(doll);
// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
