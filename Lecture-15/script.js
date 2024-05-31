class BankAccount {
    #accountNo;
    #username;
    #number;
    #amount;

    constructor(accountNo, username, number, amount = 0) {
        this.#accountNo = accountNo;
        this.#username = username;
        this.#number = number;
        this.#amount = amount;
    }

    getAmount() {
        return this.#amount;
    }

    depositAmount(amount) {
        if (amount < 1) {
            throw new Error("Amount Must Be Greater Than Zero");
        } else {
            this.#amount += amount;
        }
    }

    canWithdraw(reqAmount) {
        return this.#amount >= reqAmount;
    }

    withdrawAmount(amount) {
        if (amount < 1
        ) {
            throw new Error("Amount Must Be Greater Than Zero");
        } else {
            if (this.canWithdraw(amount)) {
                this.#amount -= amount;
                console.log("Withdrawal successful");
            } else {
                console.log("Insufficient funds");
            }
        }
    }
}


let ac = new BankAccount(11223344, "Milap", 987654321);


try {
    ac.depositAmount(100);
} catch (error) {
    console.log("Error:", error.message);
}


try {
    ac.withdrawAmount(90);
} catch (error) {
    console.log("Error:", error.message);
}


console.log("Current balance:", ac.getAmount());

class SalaryAccount extends BankAccount {
    constructor(accountNo, username, number, type, limit, salary) {
        super(accountNo, username, number, type, limit,)
        this.salary = salary;
        this.creditcard = 50000;
    }
    payAmount(amount) { 
        console.log("Kush Raho"  + amount);
     }
     BillPayment(amount) {
        console.log("Paid Amount");
     }
}
let sc =new SalaryAccount(125643,"Meet",5343823,"salary",57382323,4375353);
sc .payAmount(50000)
sc.BillPayment(10000)
