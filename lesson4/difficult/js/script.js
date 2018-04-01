function addArray(){
		let arr = [];
		let arr2 = [];
		let countArr = prompt("Сколько массивов включить во внутрь arr?","");
		for (i=0; i < countArr; i++) {
		  	let items = prompt("Перечислите через запятую числа от 1 до 5","");
		    arr[i] =  items.split(",");
		     	// console.log(arr[i]);

	  function arraySum(array){
				let sum = 0;
				for(let k = 0; k < array.length; k++){
				sum += +array[k];
				}
				arr2[i] = sum;
				//console.log(sum);
			}
			arraySum(arr[i]);
		}
		let allSum = 0;
			for (f=0; f < arr2.length; f++) {
			 	allSum = allSum + +arr2[f]
			}
			console.log(arr);
			return allSum;		 			
}
		console.log(addArray());
