let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currentNumDay = new Date().getDay()-1;

for (let i = 0; i < week.length; i++){
	let day = week[i];
	 if (currentNumDay == i){
	 		document.write('<i>' + day + '</i>' + '</br>');
	 } else if ( i > 4 ) { 
	 		document.write('<b>' + day + '</b>' + '</br>');
	 } else {
	 		document.write(day + '</br>');
	 }
}

let arr = [];
let arr2 =[];
let a = 0;
arr[0] = "32300",
arr[1] = "18345",
arr[2] = "39145",
arr[3] = "17945",
arr[4] = "72345",
arr[5] = "12345",
arr[6] = "77777";

for (i = 0; i < arr.length; i++){
		let str = arr[i];
		
		if (str.substring(0, 1) == 3 || str.substring(0, 1) == 7){
			 arr2[a] = str;
			 a++;
		}		
}

console.log(arr2);
	
 
