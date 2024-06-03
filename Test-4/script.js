let Bank = [];
document.getElementById("contact").addEventListener("submit", (e) => {
    e.preventDefault();

    class Bankaccount {
        constructor() {
            this.userName = document.getElementById("Username").value;
            this.AccountNumber = document.getElementById("acnumber").value;
            this.Amount = document.getElementById("Amount").value;
        }

        getDetails() {
            return {
                userName: this.userName,
                AccountNumber: this.AccountNumber,
                Amount: this.Amount
            };
        }
    }

    let account = new Bankaccount();
    Bank.push(account);
    console.log(Bank);

    document.getElementById("Tbody").innerHTML = "";
    Bank.forEach((ele) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = ele.userName;
        let td2 = document.createElement("td");
        td2.innerHTML = ele.AccountNumber;
        let td3 = document.createElement("td");
        td3.innerHTML = ele.Amount;
        tr.append(td1, td2, td3);
        document.getElementById("Tbody").append(tr);
    });
});
