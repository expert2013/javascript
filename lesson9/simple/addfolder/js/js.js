
let age = document.getElementById('age');
	
function showUser(surname, name) {

	this.value = age.value;

         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);

}
 

let btn = document.getElementsByTagName('button')[0];

// btn.addEventListener('click', function() {
// 		this.style.background = 'red';
// })

btn.addEventListener('click', () => {
		showUser('Егоров', 'Антон');
		//console.log(this);
})



// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 			alert("Hello " + this.name);
// 	}
// }

// User.prototype.exit = function(name){
// 	alert("Пользователь " + this.name + " ушел");
// };

// let ivan = new User('Ivan', 23);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

// let user = {
// 	name: "John"
// };

// function sayName(sureName) {
// 		console.log(this);
// 		console.log(this.name + sureName);
// };

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Show']));

// function count(number) {
// 		return this * number;
// };

// let double = count.bind(2)

// console.log(double(3));
// console.log(double(10));




// 1) Просто вызов функции - window/undefined
// 2) Метод - this = объект
// 3) Конструктор (new) = this = созданный объект
// 4) Указание конкретного контекста - call, apply, bind


// Строгий режим проверки кода
// "use strict"
// let num = 4;
// console.log(num);

// function showThis() {
// 		console.log(this);
// }

// showThis();

// "use strict"
// function showThis(a,b) {
// 		console.log(this);
// 				function sum() {
// 						console.log(this);
// 						return a + b
// 				}
// 				console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);

// let obj = {
// 		a: 20,
// 		b: 15,
// 		sum: function() {
// 				function shout() {
// 						console.log(this);
// 				}
// 				shout();
// 		}
// }

// obj.sum();




