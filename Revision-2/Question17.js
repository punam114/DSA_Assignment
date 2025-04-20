function createBankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit: function (amount) {
        balance += amount;
        return balance;
      },
      withdraw: function (amount) {
        balance -= amount;
        return balance;
      },
      getBalance: function () {
        return balance;
      }
    };
  }
  
  const account = createBankAccount(100);
  
  console.log(account.deposit(50)); // Output: 150
  
  console.log(account.withdraw(30)); // Output: 120
  
  console.log(account.getBalance()); // Output: 120