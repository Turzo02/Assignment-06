const categoryUrl = "https://openapi.programming-hero.com/api/categories";
const allPlantsUrl = "https://openapi.programming-hero.com/api/plants";

//yourcart Functionality

const displayCategory = (catg) => {
  const container = document.getElementById("category-list");
  container.innerHTML = ``;

  catg.categories.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.category_name;
    li.className =
      " p-2 mb-1 rounded-sm bg-green-50 text-black shadow-sm font-medium cursor-pointer hover:bg-[#15803d] hover:text-white transition-all duration-200";

    container.appendChild(li);

    // Add click event
    const plantsUrlByCategoryWise = `https://openapi.programming-hero.com/api/category/${element.id}`;
    li.addEventListener("click", (event) => {
      const displayOnlyCategoryWise = (element) => {
        const container = document.getElementById("card-container");
        container.innerHTML = "";
        element.plants.forEach((element) => {
          const div = document.createElement("div");
          div.className =
            "card p-4 bg-white shadow:md hover:shadow-lg transition-all duration-300";
          div.innerHTML = `
    
           <div class="top h-[200px]">
                        <img src="${element.image}" alt="" class="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div class="middle">
                        <h1 class="text-xl font-semibold mt-1">${element.name}</h1>
                           <p class="mb-1 text-[12px] text-gray-600 h-[40px] overflow-hidden relative ">
                          <span class="line-clamp-2">
                            ${element.description}
                          </span>
                        </p>
                    </div>
                    <div class="bottom1 flex justify-between mb-2">
                        <span class="bg-[#dcfce7] rounded-2xl p-2 px-3 py-1 text-sm">${element.category}</span>
                        <span class="font-bold"><b>৳</b>${element.price}</span>
                    </div>

                    <div >
                        <button 
                            class="addToCart btn w-full border-none rounded-3xl text-white bg-[#15803d]  hover:bg-[#166534] transition-colors duration-300">Add
                            to Cart</button>
                    </div>
    
    `;
          container.appendChild(div);
        });
      };
      fetch(plantsUrlByCategoryWise)
        .then((res) => res.json())
        .then((json) => displayOnlyCategoryWise(json))
        .catch((error) => console.error("Error:", error));
    });
  });
};

fetch(categoryUrl)
  .then((res) => res.json())
  .then((json) => displayCategory(json))
  .catch((error) => console.error("Error:", error));

//   upstream all code is done dont change

const displayCardsInfo = (allPlants) => {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  allPlants.plants.forEach((element) => {
    const div = document.createElement("div");
    div.className =
      "card p-4 bg-white shadow:md hover:shadow-lg transition-all duration-300";
    div.innerHTML = `
    
           <div class="top h-[200px]">
                        <img src="${element.image}" alt="" class="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div class="middle">
                        <h1 class="text-xl font-semibold mt-1">${element.name}</h1>
                           <p class="mb-1 text-[12px] text-gray-600 h-[40px] overflow-hidden relative ">
                          <span class="line-clamp-2">
                            ${element.description}
                          </span>
                        </p>
                    </div>
                    <div class="bottom1 flex justify-between mb-2">
                        <span class="bg-[#dcfce7] rounded-2xl p-2 px-3 py-1 text-sm">${element.category}</span>
                        <span class="font-bold"><b>৳</b>${element.price}</span>
                    </div>

                    <div>
                        <button
                          class=" addToCart btn  w-full border-none rounded-3xl text-white bg-[#15803d]  hover:bg-[#166534] transition-colors duration-300">Add
                            to Cart</button>
                    </div>
    
    `;

    container.appendChild(div);
  });
};

fetch(allPlantsUrl)
  .then((res) => res.json())
  .then((json) => displayCardsInfo(json))
  .catch((error) => console.error("Error:", error));

//   upstream all code is goood dootn change

// Add click event show modal
const container = document.getElementById("card-container");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const cartContent = document.getElementById("cartContent");

document.getElementById("card-container").addEventListener("click", (e) => {
  if (e.target.tagName === "H1" && e.target.closest(".card")) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    const popup = e.target.closest(".card");

    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `${popup.innerHTML} 
    `;
  } 
});



closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});
