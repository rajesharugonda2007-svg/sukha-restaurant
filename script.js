// function order(item) {
//   alert("You ordered: " + item + " 🍽\nThank you for choosing Sukha Restaurant!");
// }
const menu = [
  { name: "Veg Biryani", price: 120 },
  { name: "Paneer Butter Masala", price: 150 },
  { name: "Chicken Curry", price: 180 },
  { name: "Roti (2 pcs)", price: 40 },
  { name: "Cold Coffee", price: 70 },
  { name: "Ice Cream", price: 90 }
];

const menuContainer = document.getElementById("menu");
const cartList = document.getElementById("cartList");
const total = document.getElementById("total");
let cart = [];

menu.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("item");
  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
  `;
  menuContainer.appendChild(div);
});

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  cartList.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = ${item.name} - ₹${item.price};
    cartList.appendChild(li);
    sum += item.price;
  });
  total.textContent = Total: ₹${sum};
}

document.getElementById("orderBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Please add some items first!");
  } else {
    alert("✅ Your order has been placed successfully!");
    cart = [];
    renderCart();
  }
});

