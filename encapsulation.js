class BankAccount{

	customerName;

	accountNumber;

	#balance = 0;

	constructor(customerName, balance = 0) {

		this.customerName = customerName;

		this.accountNumber = Date.now();

		this.#balance = balance;

		

	}

	deposit(amount) {

		this.#balance += amount;
	

	}

	withdraw(amount) {
		
		this.#balance -= amount;

	}

	set balance(amount) {

		if (isNaN(amount)) {

			 throw new  Error('Amount is not vailed input')
			

		}


		this.#balance = amount;


	}

	get balance() {

		return this.#balance;

		

	}

}


class CurrentAccount extends BankAccount {

	transactionLimit = 50000;

	constructor(customerName, balance = 0) {
		
		super(customerName, balance);


		



	}
  

	calcultateInterest(amout) {

		console.log('Calculating interest');
			

		}



	takeBusinessLoan(amount) {

		//Logic 

		this.calcultateInterest(amount)

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


dilipAccount.takeBusinessLoan(5000);

dilipAccount.balance = 400;

console.log(dilipAccount.balance);

dilipAccount.deposit(10000);

dilipAccount.withdraw(1000);

dilipAccount.takeBusinessLoan(5000);

dilipAccount.takePersonalLoan(3000);


console.log(dilipAccount);

