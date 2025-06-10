//1.Inspect the createBook function to identify how this is used incorrectly in printInfo.
//2.Correct the this usage to access title and author.
//3.Test the function to ensure it works as expected.

function createBook(title, author) {
    return {
      title: title,
      author: author,
      printInfo: () => {
        console.log("Book: " +title + ", Author: " + author);
      }
    };
  }
  
  
  const book = createBook("1984", "George Orwell");
  book.printInfo();
  // Output: Book: 1984, Author: George Orwell