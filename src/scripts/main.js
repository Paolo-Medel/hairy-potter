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

// The return statement is needed on the end of this function because it is
// not only updating the array invoked in usePottery, but also updating the
// objects on lines 7-11. This is why the test was showing failed but HTML was
// displaying the correct information
toSellOrNotToSell(mug);
toSellOrNotToSell(plate);
toSellOrNotToSell(pot);
toSellOrNotToSell(vase);
toSellOrNotToSell(doll);

usePottery();

const parentHTMLElement = document.querySelector(".potteryList");
parentHTMLElement.innerHTML = PotteryList();

//! I don't understand how arrays are getting updated in this one... and why do we need a return statement on the teSell func?//
