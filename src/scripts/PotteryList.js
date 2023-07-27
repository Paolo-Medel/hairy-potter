export const PotteryList = (usePotteryArray) => {
  let htmlString = '<article class="whole_pottery_list">';

  for (const obj of usePotteryArray) {
    htmlString += `<section class="pottery" id="pottery--1">
      <h2 class="pottery__shape">${obj.shape}</h2>
      <div class="pottery__properties">
        Item weighs ${obj.weight} grams and is ${obj.height} cm in height
      </div>
      <div class="pottery__price">Price is ${obj.price}</div>
    </section>`;
  }
  htmlString += `</article>`;

  return htmlString;
};
