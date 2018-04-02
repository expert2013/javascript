let openBtn = document.getElementById('open-btn'),
		mainInfo = document.getElementsByClassName('main-info')[0],
		goodsItem = document.getElementsByClassName('goods-item'),
		allButton = document.querySelectorAll('button'),
		mainFunction = document.getElementsByClassName('main-functions')[0],
		input = document.querySelectorAll('input[type=text].choose-item, .time-value, .count-budget-value'),
    inputEmp = document.querySelectorAll('input[type=text].hire-employers-item')		

// Получить кнопку "Открыть магазин" через id
console.log(openBtn);

// Получить все поля в левом меню через классы
console.log(mainInfo);

// Получить поля категории товаров через класс
for (i = 0; i < goodsItem.length; i++){
	console.log((goodsItem)[i]);
}

// Получить все 3 кнопки через Tag
for (i = 0; i < allButton.length; i++){
	if (i > 0) {
		console.log((allButton)[i]);
	}	
}

// Получить поля ввода товаров, времени и расчета бюджета через querySelector
for (i = 0; i < input.length; i++){
	console.log(input[i]);
}

// Получить поля имен сотрудников через querySelectorAll
for (i = 0; i < inputEmp.length; i++){
	console.log(inputEmp[i]);
}



