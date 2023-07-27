let pricedPottery = [];

export const toSellOrNotToSell = (object) => {
  if (object.weight >= 6 && object.cracked === false) {
    object.price = 40;
    pricedPottery.push(object);
  } else if (object.weight < 6 && object.cracked === false) {
    object.price = 20;
    pricedPottery.push(object);
  }
  return object;
};

export const usePottery = () => {
  const potteryArray = pricedPottery;

  return potteryArray;
};
