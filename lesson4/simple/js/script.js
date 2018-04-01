let money, 
	  name,
	  time,
	  price;


function start() {
  money = prompt("Ваш бюджет?","");

  while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?","");  	
  }

	name = prompt("Название вашего магазина?","").toUpperCase();
	time = 21;
}

 // start();

let mainList = {
		budjet: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		shopItems: [],
		chooseGoods:function chooseGoods(){
				for (let i = 0; i < 5; i++){

		// Вводится только текст. Текст типа "123" игнорируется		
			let a = prompt("Какой тип товаров будем продавать?","");
						
						if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && isNaN(a) == true) {
							console.log('Все верно!');
							mainList.shopGoods[i] = a;		
						}	else {
							i--;			
						} 
				}
		},
		workTime: function workTime(time){
		if (time < 0) {
				console.log('Такого не может быть!');
		} else if (time > 8 && time < 20) {
				console.log('Время работать!');
				mainList.open = true;
			} else if (time < 24) {
		    	console.log('Уже слишком поздно!');
				} 	else {
						console.log('В сутках только 24 часа');
					}
	},
		dayBudjet: function dayBudjet(){
		alert("Ежедневный бюджет " + mainList.budjet / 30);		
	},
		makeDiscount: function makeDiscount(){
		 if (mainList.discount == true) {
			price = (price * 0.8);
		}		
	},
		hireEmployers: function hireEmployers(){
		for (let i = 1; i < 4; i++){
				let name = prompt("Имя сотрудника?","");
				mainList.employers[i] = name;		
			}
		},
		chooseShopItems: function chooseShopItems(){
				let items = prompt("Перечислите через запятую товары","");
						mainList.shopItems = items.split(",");
						mainList.shopItems.push(prompt("Подождите, еще ", ""));
						mainList.shopItems.sort();
						mainList.shopItems.forEach(function(item,i) {
						document.write(i + 1 + ": " + "У нас вы можете купить: " + item + '</br>');
			});
		}	
	}


console.log(mainList);


console.log("Наш магазин включает в себя: ");
for ( let key in mainList) {
		console.log('Свойство ' + key + " имеет значение " +  mainList[key]);	
}

