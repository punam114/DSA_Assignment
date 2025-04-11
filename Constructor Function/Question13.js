// 1.Define createInventoryItem to take name, category, and price.
// 2.Add a method describeItem() to createInventoryItem to print the item's details.
// 3.Define addItemDiscount, which accepts an inventoryItem object and discountPercent.
// 4.Calculate discountedPrice based on the original price and discountPercent.
// 5.Add a method applyDiscount() to addItemDiscount that logs the discountedPrice for the item.

//first function
function createInventoryItem(name,category,price){
  
    let obj = {};
    
    obj.name = name;
    obj.category = category;
    obj.price = price;
    
    obj.describeItem = function(){
      console.log(`Item: ${name}, Category: ${category}, Price: ${price}`)
    }
    return obj;
  }
  
  
  //second function
  function addItemDiscount(discountPercent){
    
    let obj1 = createInventoryItem(price);
    
    obj1.discountPercent = discountPercent;
    
    obj1.applyDiscount = function(){
      
      let discountPrice = (price*10)/100;
      let finalPrice = price - discountPrice;
      console.log(` Discounted Price for Laptop: ${finalPrice}`);
    }
    
    return obj1;
  }
  
  
  const item = createInventoryItem("Laptop", "Electronics", 1500);
  item.describeItem();
  // Output: Item: Laptop, Category: Electronics, Price: 1500
  
  const discountedItem = addItemDiscount(item, 10);
  discountedItem.price;
  // Output: Discounted Price for Laptop: 1350
  
  