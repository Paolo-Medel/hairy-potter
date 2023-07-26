// this variable needs to have the value of the primary key for each piece of pottery//
let primaryKeyForPottery = 1;

export const makePottery = (shape1, weight2, height3) => {
  // must return an object with shape weight height and an incrementing id

  let potteryObject = {
    shape: shape1,
    weight: weight2,
    height: height3,
    id: primaryKeyForPottery,
  };

  if (primaryKeyForPottery === 1) {
    primaryKeyForPottery += 1;
  } else {
    primaryKeyForPottery += 1;
  }

  return potteryObject;
};
