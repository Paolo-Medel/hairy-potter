// Imports go first
import { makePottery } from "./Potterywheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";
// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 3);
let plate = makePottery("plate", 2, 3);
let pot = makePottery("pot", 2, 3);
let vase = makePottery("vase", 2, 3);
let doll = makePottery("doll", 2, 3);

firePottery(mug, 1000);
firePottery(plate, 1500);
firePottery(pot, 500);
firePottery(vase, 25000);
firePottery(doll, 200);

toSellOrNotToSell(mug);
toSellOrNotToSell(plate);
toSellOrNotToSell(pot);
toSellOrNotToSell(vase);
toSellOrNotToSell(doll);

const pottery = usePottery();

const parentHTMLElement = document.querySelector(".potteryList");
parentHTMLElement.innerHTML = PotteryList(pottery);
// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
