//??when click add to cart then show deatails in 3rd column

const parentCart = document.getElementById("parentCart");
let totalPrice = 0;
const addToCart = (name, price) => {
  totalPrice += price;

  const cardDiv = document.createElement("div");
  cardDiv.innerHTML = `

          <div
                            class="flex justify-between items-center px-2 py-1 bg-[#f0fdf4] shadow-md my-2 ">
                            <div class="cartLeft">
                                <h1 class="font-semibold  ">${name}</h1>
                                <p class=""><b>৳</b>
                                    <span class="font-bold">${price}</span> x <span class="font-medium">1</span>
                                </p>
                            </div>

            <div class="cursor-pointer cartClose ">
                                ❌
                            </div>
                        </div>
`;
  parentCart.appendChild(cardDiv);

  const cartTotalPrice = document.getElementById("cartTotalPrice");
  cartTotalPrice.innerText = totalPrice;

  const cartClose = cardDiv.querySelector(".cartClose");
  cartClose.addEventListener("click", () => {
    cardDiv.remove();
    totalPrice -= price;
    cartTotalPrice.innerText = totalPrice;
  });
};


//?? when click  Highlight active category button when selected.
//<button class="btn btn-success">Success</button>