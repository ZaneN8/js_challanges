state = {
  items: ["Bread", "Chicken", "Paper Towel"],
};

function addItems() {
  cart = "";
  state.items.forEach(function (items) {
    cartStr += `
  <div onClick="handleClick(${index})">
  ${items}
  </div>
  `;
  });
  return cart;
}

function handleClick(cart, items) {
  cart += items;
}

function render() {
  let htmlStr = ` <div>
  <h1>What to buy</h1>
  </div>

`;
  document.getElementById("app").innerHTML = htmlStr;
}
render();
