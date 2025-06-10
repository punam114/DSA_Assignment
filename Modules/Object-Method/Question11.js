let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };
let bag = "";
for(let keys in book){
  bag+= keys +":"+book[keys] +" "
}
console.log(bag)