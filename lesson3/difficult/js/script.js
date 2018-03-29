let str = "урок-3-был слишком легким";
str = str.charAt(0).toUpperCase() + str.substring(1, str.length); 
str = str.replace(/\-/g ,' ');
console.log(str);

let strChanges = str.replace('легким', ''); 

strChanges = strChanges.replace(strChanges.slice(-2),"oo");

document.write('<h1>' + strChanges + '</h1>');


let arr = [20, 33, 1, "Человек", 2, 3];
let arr2 = [];
let b = 0;
	for (i = 0; i < arr.length; i++){
		let a = arr[i];
			if (!isNaN(a)) { 
				arr2[b] = a ** 3;
				b++;
			}
	}
b = 0;
for (i = 0; i < arr2.length; i++){
	b = b + arr2[i]; 
	
}	
//console.log(Math.sqrt(b));
console.log("Корень квадратный из " + b + " = " + Math.sqrt(b));