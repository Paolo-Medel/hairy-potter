let potteryArray = [];

export const toSellOrNotToSell = (object) => {
  if (object.weight >= 6 && object.cracked === false) {
    object.price = 40;
    potteryArray.push(object);
  } else if (object.weight < 6 && object.cracked === false) {
    object.price = 20;
    potteryArray.push(object);
  }
};

export const usePottery = () => {
  return potteryArray;
};
