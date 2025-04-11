async function fetchProducts() {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
  
      data.forEach((item) => {
        console.log(item.title, item.price, item.image, "View Details");
      });
  
      let total = data.reduce((sum, item) => sum + item.price, 0);
      console.log("Total Price:", total.toFixed(2));
      
    } catch (err) {
      console.log("Failed to fetch products. Please try again later.");
    }
  }
  
  fetchProducts();
  