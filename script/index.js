//?? catergoryList automatically show when page reload done
const catergoryList = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategoryList(data));
};

const displayCategoryList = (data) => {
  const categorylist = document.getElementById("category-list");
  categorylist.innerHTML = ``;
  data.categories.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
       <li onclick="categloryClick(${element.id})" class="mb-1 w-full btn btn-outline btn-success justify-start">  ${element.category_name}</li>
   `;

   categorylist.appendChild(li);
  });
};

catergoryList();

//?? allplants automatically show when page reload done
const allPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllPlants(data));
};

const displayAllPlants = (data) => {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ``;

  data.plants.forEach((element) => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
     <div class="card p-4 bg-white shadow:md hover:shadow-lg "> 
                <div class="top h-[200px]">
                    <img src="${element.image}" alt="" class="w-full h-full object-cover rounded-2xl" />
                </div>
                <div class="middle">
                    <h1 class="text-xl font-semibold mt-1" onclick="clickH1ForModal(${element.id})" >${element.name}</h1>
                    <p class="mb-1 text-[12px] text-gray-600 h-[40px] overflow-hidden relative ">
                        <span class="line-clamp-2">
                            ${element.description}
                        </span>
                    </p>
                </div>
                <div class="bottom1 flex justify-between my-2">
                    <span class="bg-[#dcfce7] rounded-2xl p-2 px-3 py-1 text-sm">${element.category}</span>
                    <span class="font-bold"><b>৳</b>${element.price}</span>
                </div>
                <div>
                    <button
                        class="addToCart btn w-full border-none rounded-3xl text-white bg-[#15803d]  hover:bg-[#166534] transition-colors duration-300" onclick="addToCart('${element.name}',${element.price})" > Add to Cart </button>
                </div>


            </div>  

    `;

    cardContainer.appendChild(cardDiv);
  });
};

allPlants();

// ??when click category then show only that category plants
const categloryClick = (id) => {
    
  const url = "https://openapi.programming-hero.com/api/category/" + id;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlantsByCategoryWise(data));
};

const displayPlantsByCategoryWise = (data) => {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ``;

  data.plants.forEach((element) => {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
     <div class="card p-4 bg-white shadow:md hover:shadow-lg "> 
                <div class="top h-[200px]">
                    <img src="${element.image}" alt="" class="w-full h-full object-cover rounded-2xl" />
                </div>
                <div class="middle">
                    <h1 class="text-xl font-semibold mt-1" onclick="clickH1ForModal(${element.id})">${element.name}</h1>
                    <p class="mb-1 text-[12px] text-gray-600 h-[40px] overflow-hidden relative ">
                        <span class="line-clamp-2">
                            ${element.description}
                        </span>
                    </p>
                </div>
                <div class="bottom1 flex justify-between my-2">
                    <span class="bg-[#dcfce7] rounded-2xl p-2 px-3 py-1 text-sm">${element.category}</span>
                    <span class="font-bold"><b>৳</b>${element.price}</span>
                </div>
                <div>
                    <button
                        class="addToCart btn w-full border-none rounded-3xl text-white bg-[#15803d]  hover:bg-[#166534] transition-colors duration-300" onclick="addToCart('${element.name}',${element.price})"  > Add to Cart </button>
                </div>


            </div>  

    `;
    cardContainer.appendChild(cardDiv);
  });



};

// ??when click h1 of any card then show a modal

const clickH1ForModal = (id) => {
  const url = "https://openapi.programming-hero.com/api/plant/" + id;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayModalAfterClick(data));
};

const displayModalAfterClick = (data) => {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = ``;

  const cardDiv = document.createElement("div");
  cardDiv.innerHTML = `

   <div
                     class="bg-white rounded-lg shadow-xl max-w-sm w-full overflow-hidden">
                        <div class="p-2 md:p-3">
                            <h1 class="text-2xl font-bold mb-4">${data.plants.name}</h1>
                        </div>

                        <div class="relative max-w-[400px] max-h-[200px] overflow-hidden">
                            <img src="${data.plants.image}"
                                alt="image of tree"
                                class=" object-cover rounded-t-lg">
                        </div>

                        <div class="p-2 md:p-3 space-y-2 text-gray-600">
                            <p class="text-sm ">
                                <span class="font-bold text-black">Category:</span> ${data.plants.category}
                            </p>
                            <p class="text-sm ">
                                <span class="font-bold text-black">Price: </span>৳${data.plants.price}
                            </p>
                            <p class="text-sm">
                                <span class="font-bold text-black">Description:</span> ${data.plants.description}
                            </p>
                        </div>

                        <div class="p-2 md:p-3 pt-0 flex justify-end">
                            <button id="closeModal" class="btn btn-outline btn-success  ">
                                Close
                            </button>
                            
                        </div>
                    </div>
`;
  modalContent.appendChild(cardDiv);

  const closeModal = document.getElementById("closeModal");
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });
};
