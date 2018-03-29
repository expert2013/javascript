let money, 
	  name,
	  time,
	  price;


function start() {
  money = prompt("Ваш бюджет?");

  while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?");  	
  }

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 21;
}

 // start();

let mainList = {
		budjet: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false
};

function hireEmployers(){
	for (let i = 0; i < 4; i++){
			let emp = prompt("Название сотрудника?");
			if ((typeof(emp)) === 'string' && (typeof(emp)) != null && emp != '' && emp.length < 50) {
			mainList.employers[i] = emp;
		
		} else {
			i--;
		}
	}	
}

// hireEmployers();

console.log(mainList.employers);

function chooseGoods(){
		for (let i = 0; i < 5; i++){

				let a = prompt("Какой тип товаров будем продавать?");
				
				if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
					console.log('Все верно!');
					mainList.shopGoods[i] = a;		
				}	else {
					i--;			
				} 
		}
}
// chooseGoods();

function workTime(time){
		if (time < 0) {
				console.log('Такого не может быть!');
		} else if (time > 8 && time < 20) {
				console.log('Время работать!');
			} else if (time < 24) {
		    	console.log('Уже слишком поздно!');
				} 	else {
						console.log('В сутках только 24 часа');
					}
}			
// workTime(18);

function calcBudjet(mainBudjet){
		return mainBudjet / 30;		
}

function discountSystem(price){
	if (price == undefined ||  isNaN(price) || price == "" || price == null){ 
		console.log('Не введен прайс');
	} else if (mainList.discount == true) {
		console.log(price * 0.8);
	} else {
		console.log(price);	
	}
}

 // discountSystem(100);

 console.log("Ежедневный бюджет " + calcBudjet(mainList.budjet));

 console.log(mainList);

