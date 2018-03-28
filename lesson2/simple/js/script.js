let money = prompt("Ваш бюджет?");
let name = prompt("Название вашего магазина?");

let mainList = {
		budjet: money,
		shopName: name,
		shopGoods: [],
		open: false
}

// Третий способ
// let i = 0;
// do {
//   let a = prompt("Какой тип товаров будем продавать?");
  
//   if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
// 			console.log('Все верно!')
// 			mainList.shopGoods[i] = a;
//  	}	else if (a === null || a == '') {
// 			console.log('Вам нужно что нибудь ввести!');
// 			i--;			
// 		}	else {
// 			mainList.shopGoods[i] = a;
// 		} 		

//   i++;

// } while (i < 5); 

// Второй способ
// let i = 0;
// while (i < 5) {
// 	let a = prompt("Какой тип товаров будем продавать?");
  
//   if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
// 			console.log('Все верно!')
// 			mainList.shopGoods[i] = a;
//  	}	else if (a === null || a == '') {
// 			console.log('Вам нужно что нибудь ввести!');
// 			i--;			
// 		}	else {
// 			mainList.shopGoods[i] = a;
// 		} 		

//   i++;

// }

// Первый способ
for (let i = 0; i < 5; i++){

		let a = prompt("Какой тип товаров будем продавать?");
		
		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
			console.log('Все верно!')
			mainList.shopGoods[i] = a;
		
		}	else if (a === null || a == '') {
			console.log('Вам нужно что нибудь ввести!');
			i--;			
		}	else {
			mainList.shopGoods[i] = a;
		} 
}

alert(mainList.budjet / 30);

console.log(mainList);
