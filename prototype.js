function BankAccount(customerName,balance=0) {
	this.customerName = customerName;
	this.accountNumber = Date.now();
	this.balance = balance;


	//this.deposit = function (amount) {

	//	this.balance += amount;

		

//	};

	//this.withdraw = (amount)=> {

	//	this.balance -= amount;

		


	//}



}

const dilipAccount = new BankAccount("Dilip", 1000)

BankAccount.prototype.deposit = function (amount) {

		this.balance += amount;
	

}

BankAccount.prototype.withdraw = function (amount) {
	this.balance -= amount;

}



dilipAccount.deposit(2000);

dilipAccount.withdraw(200);

console.log(dilipAccount);


//console.log(BankAccount.prototype);