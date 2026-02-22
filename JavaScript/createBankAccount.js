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

    function withdraw(amount) {
        if(amount <= 0){
            return "Error: The withdrawal amount should be positive";
        }
        if(amount > balance){
            return "Error: Insufficient balance";
        }
        balance -= amount;
        transactionHistory.push({
            type: "withdraw",
            amount
        })
        return balance;
    }

    function getBalance(){
        return balance;
    }

    function getTransactionHistory() {
        return [...transactionHistory];
    }

    return {
        deposit,
        withdraw,
        getBalance,
        getTransactionHistory
    };
}