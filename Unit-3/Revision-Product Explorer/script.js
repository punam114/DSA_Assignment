/** @format */
let url = "https://fakestoreapi.com/products";
let ProductData = [];
let currentPage = 1;
let pageSize = 8;
let totalPages = 1;

async function fetchData() {
  let res = await fetch(url);
  let data = await res.json();
  ProductData = [...data];
  totalPages = Math.ceil(ProductData.length / pageSize);
  updateButtons();
  displayData(ProductData);
}

// Function to paginate the data
function paginate(array, pageSize, pageNumber) {
  const start = (pageNumber - 1) * pageSize;
  return array.slice(start, start + pageSize);
}

// Function to display products
function displayData(products) {
  let items = paginate(products, pageSize, currentPage);

  let box = document.getElementById("box");
  box.innerHTML = "";
  items.forEach((ele) => {
    let card = document.createElement("div");
    card.innerHTML = `
       <img src="${ele.image}" alt="${ele.title}"/>
       <h2>${ele.title}</h2>
       <h3>Price : ${ele.price}</h3>
       <h3>Category : ${ele.category}</h3>
       <p>${ele.description}</p>
    `;
    box.appendChild(card);
  });
  document.getElementById("pageInfo").textContent = `${currentPage} / ${totalPages}`;
}

// Function to update the state of pagination buttons
function updateButtons() {
  document.getElementById("prev").disabled = currentPage === 1;
  document.getElementById("next").disabled = currentPage === totalPages;
}

// Event listeners for pagination buttons
document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayData(ProductData);
    updateButtons();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayData(ProductData);
    updateButtons();
  }
});

// Debounce for search functionality
let timer;
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
  let searchVal = searchInput.value;
  let filtered = ProductData.filter((item) =>
    item.title.toLowerCase().includes(searchVal.toLowerCase())
  );
  searchInput.value = "";
  clearTimeout(timer);

  timer = setTimeout(() => {
    displayData(filtered);
  }, 1000);
});

// Filter functionality
let filter = document.getElementById("filter");
filter.addEventListener("change", () => {
  let filterVal = filter.value;
  let filteredCategory = ProductData.filter((item) =>
    item.category.toLowerCase().includes(filterVal.toLowerCase())
  );
  displayData(filteredCategory);
});

// Sort functionality
let sort = document.getElementById("sort");
sort.addEventListener("change", () => {
  let sortVal = sort.value;
  let sortedProduct = [...ProductData];
  if (sortVal === "low") {
    sortedProduct.sort((a, b) => a.price - b.price);
  } else if (sortVal === "high") {
    sortedProduct.sort((a, b) => b.price - a.price);
  } else if (sortVal === "alphabetically") {
    sortedProduct.sort((a, b) => a.title.localeCompare(b.title));
  }
  displayData(sortedProduct);
});

fetchData();
