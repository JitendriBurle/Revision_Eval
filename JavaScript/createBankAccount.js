function createBankAccount(){
    let balance = 0;
    let transactionHistory = [];

    function deposit(amount) {
        if(amount <= 0){
            return "Error: The deposit amount should be positive";
        }
        balance += amount;
        transactionHistory.push({
            type: "deposit",
            amount
        })
        return balance;
    }

    function withdraw
}