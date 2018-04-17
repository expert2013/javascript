// let options = {
// 		width: 1366,
// 		height: 768,
// 		bacground: 'red',
// 		font: {
// 			size: "16px",
// 			color: "#fff"
// 	}	
// }
// // JSON формат
// console.log(JSON.stringify(options));
// //результат {"width":1366,"height":768,"bacground":"red","font":{"size":"16px","color":"#fff"}}

// // формат объект
// console.log(JSON.parse(JSON.stringify(options)));
// //результат {width: 1366, height: 768, bacground: "red", font: {…}}

let request = new new XMLHttpRequest();
// 1) Создаем объект запроса

request.open("GET", 'server,php', true, login, password);

// 2) Настройка запроса
request.send()
// 3) Отправка запроса
request.status // ответ сервера
request.statusText // текстовое описание сервера
request.responseText // текст ответа сервера
request.readyState // текущее состояние запроса


