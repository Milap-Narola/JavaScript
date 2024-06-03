let Bank = []
document.getElementById("contact").addEventListener("submit", Bankaccount = (e) => {
    e.preventDefault();
    class Bankaccount {
        constructor() {
            this.userName = getElementById("Username").value;
                this.AccountNumber = getElementById("acnumber").value;
                this.Amount = getElementById("Amount").value;
        }
        getDetails() {
            return this.userName, this.AccountNumber, this.Amount;
        }
    }

    let Account = new Bankaccount();
    Account.push(Account);
    console.log(Bank);

    document.getElementById("Tbody").innerHTML = ""
    Account.map((ele) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = ele.userName;
        let td2 = document.createElement("td");
        td2.innerHTML = ele.AccountNumber;
        let td4 = document.createElement("td");
        td4.innerHTML = ele.Amount;
        tr.append(td1, td2, td4);
        document.getElementById("Tbody").append(tr);


    })
})