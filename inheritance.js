

//function BankAccount(customerName, balance = 0) {
	
	//this.customerName = customerName;

	//this.accountNumber = Date.now();

	//this.balance = balance;


	//this.deposit = function (amount) {

	//	this.balance += amount;

		

//	};

	//this.withdraw = (amount)=> {

	//	this.balance -= amount;

		


	//}



//}


class BankAccount{

	customerName;

	accountNumber;

	balance = 0;

	constructor(customerName, balance = 0) {

		this.customerName = customerName;

		this.accountNumber = Date.now();

		this.balance = balance;

		

	}

	deposit(amount) {

		this.balance += amount;
	

	}

	withdraw(amount) {
		
		this.balance -= amount;

	}

}


class CurrentAccount extends BankAccount {

	transactionLimit = 50000;

	constructor(customerName, balance = 0) {
		
		super(customerName, balance);


		



	}

	takeBusinessLoan(amount) {

		console.log('Taking Business Loan ',amount);
		
	}

}


	class SavingAccount extends CurrentAccount {

		transactionLimit = 10000;

		constructor(customerName, balance = 0) {
			
			super(customerName,balance);

			

		}

		takePersonalLoan(amount) {

			console.log('Taking personal loan',amount);
			
		}

	}


const dilipAccount = new SavingAccount("Dilip", 1000)

dilipAccount.deposit(10000);

dilipAccount.withdraw(1000);

dilipAccount.takeBusinessLoan(5000);

dilipAccount.takePersonalLoan(3000);


console.log(dilipAccount);






























//function BankAccount(customerName, balance = 0) {

	this.customerName = customerName;
	this.accountNumber = Date.now();
	this.balance = balance;

	

//}


//BankAccount.prototype.deposit = function (amount) {
	
	this.balance += amount;

//}

//BankAccount.prototype.withdraw = function(amount) {

	this.balance -= amount;

	
//}

//const dilipK1Account= new BankAccount('dilip',10000)


//dilipK1Account.deposit(10000);
//dilipK1Account.withdraw(5000);


//console.log(dilipK1Account);

//function CurrentAccount(customerName,balance=0) {
	
	//this.customerName = customerName;
	//this.accountNumber = Date.now();
	//this.balance = balance;

	//BankAccount.call(this, customerName, balance);



	//this.transactionLimit = 50000;



//}

//CurrentAccount.prototype=Object.create(BankAccount.prototype)

//CurrentAccount.prototype.takeBussinessLoan = function (amount) {
	
	//console.log('Taking business loan ', amount);
//}





//CurrentAccount.prototype.deposit = function (amount) {
	
	//this.balance += amount;

//}

//CurrentAccount.prototype.withdraw = (amount) => {

	//this.balance -= amount;

	
//}

//const dilipAccount = new CurrentAccount("Dilip", 1000);



//dilipAccount.deposit(20000);

//dilipAccount.withdraw(5000);


//console.log(dilipAccount);



//function SavingAccount(customerName,balance=0) {
	
	//this.customerName = customerName;
	//this.accountNumber = Date.now();
	//this.balance = balance;


//	CurrentAccount.call(this, customerName, balance)
	

	//this.transactionLimit = 10000;



//}

//SavingAccount.prototype = Object.create(CurrentAccount.prototype);


//SavingAccount.prototype.takePersonalLoan = function (amount) {
	
//	console.log('Taking business loan ', amount);
//}





//SavingAccount.prototype.deposit = function (amount) {
	
	//this.balance += amount;

//}

//SavingAccount.prototype.withdraw = (amount) => {

	//this.balance -= amount;

	
//}

//const dilipkAccount = new SavingAccount("Dilip", 1000);

//dilipkAccount.deposit(20000);

//dilipkAccount.withdraw(5000);


//console.log(dilipkAccount);
