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
// ---------- ORDER FORM + LOCATION SCRIPT ----------

// Function to get user location and show it in form
function getLocation() {
  const locationInput = document.getElementById("location");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        locationInput.value = https://www.google.com/maps?q=${lat},${lon};
      },
      () => {
        locationInput.placeholder = "Location access denied ❌";
      }
    );
  } else {
    locationInput.placeholder = "Geolocation not supported 🚫";
  }
}

// Get location automatically when page loads
window.addEventListener("load", getLocation);

// WhatsApp order send function
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const food = document.getElementById("food").value;
      const location = document.getElementById("location").value;

      const message = Hello Sukha Restaurant 🍴%0A%0A🧍Name: ${name}%0A📞 Phone: ${phone}%0A🍛 Order: ${food}%0A📍 Location: ${location};
      const whatsappNumber = "917676092811"; // You can change this later

      window.open(https://wa.me/${whatsappNumber}?text=${message}, "_blank");
    });
  }
});
function selectDish(dishName) {
  const dishInput = document.getElementById("dish");
  if (dishInput) {
    dishInput.value = dishName;
    alert(You selected: ${dishName});
  }
}



