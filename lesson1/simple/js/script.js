	//Основное задание
	var budjet = prompt("Ваш бюджет?");
	var nameShop = prompt("Название Вашего магазина");
	var obj = [];

	for (var i = 0; i < 3; i++) {		 
		obj[i] = prompt("Какой тип товаров будем продавать?");
	} 
	
	var mainList = { 
				  budjet: budjet, 
					nameShop: nameShop , 
					shopGoods: obj, 
					employers: ['Иванов', 'Петров', 'Сидоров'] , 
					open: true
  };

  var result = mainList["budjet"];
		
		console.log("Пользователь: " + mainList["employers"][0] + "." +
		" Бюджет на один день составляет: " + +result / 30 + "$");



