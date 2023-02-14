function BankAccount(customerName,balance=0) {
	this.customerName = customerName;
	this.accountNumber = Date.now();
	this.balance = balance;


	this.deposit = function (amount) {

		this.balance += amount;

		

	};

	this.withdraw = (amount)=> {

		this.balance -= amount;

		


	}



}

//const dilipAccount = new BankAccount("Dilip k", 1000)

//dilipAccount.deposit(2000)

//dilipAccount.withdraw(1000)

//console.log(dilipAccount);




//Dom


const accounts = [];


const accountForm = document.querySelector("#accountForm")

const customerName = document.querySelector("#customerName");

const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");

const accountNumber = document.querySelector("#accountNumber");

const amount = document.querySelector("#amount");


const withdrawForm = document.querySelector("#withdrawForm");


const withdrawaccountNumber = document.querySelector("#withdrawaccountNumber");

const withdrawamount = document.querySelector("#withdrawamount");



accountForm.addEventListener("submit", (e) => {

	e.preventDefault();

	const account = new BankAccount(customerName.value, +balance.value);

	accounts.push(account);


	console.log(accounts);
	//console.log(customerName.value ,balance.value );
	


})

depositForm.addEventListener("submit", (e) => {

	e.preventDefault();

	const account = accounts.find((account) => account.accountNumber === +accountNumber.value)
	
	account.deposit(+amount.value);


console.log(accounts);
	

})


withdrawForm.addEventListener("submit", (e) => {

	e.preventDefault();

	const account = accounts.find((account) => account.withdrawaccountNumber === +withdrawaccountNumber.value)


	//console.log(withdraw());
	account.withdraw(-withdrawamount.value);


	console.log(accounts);



})

