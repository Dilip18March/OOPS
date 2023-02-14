// Utility function

class User {


	

	static id = 1

	static product = {
		
		name: 'book',
		price: 1000,
		size: '1000 ',

	
	
	}

	static checkproduct() {

		console.log(User.product);
		console.log(User.product.price);
		

	}

 


	constructor(name, age,income) {
		//propeties

		this.name = name;

		this.age = age;


		this.income = income;

		this.id = User.id++;

	
		
	}

	//mathod

	static compareByage(user, user1) {
		
		return user.age - user1.age
		

	}

	static compareByIncome(user, user2) {
		
		return user.income - user2.income
		

	}

}

const user = new User('Dilip', 21,10000);
const user1 = new User('Mohit', 23,20000);
const user2 = new User('Rohit', 25,30000);

const users = [user, user1, user2];

console.log(User.compareByage);

console.log(User.compareByIncome);

console.log(User.checkproduct);

User.checkproduct();




users.sort((a, b) => a.age - b.age);


console.log(user,user1);