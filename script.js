// const array = [1,2,3,4,5]. Yeni array yaradın və bu array-in əksinə düzülmüş formada olsun (e.x [5,4,3,2,1])
const array = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}

console.log(reversedArray);





// 2. const strArray = ["cat","mouse","panter","chicken"] bu array-dən "cat" sözünü silin və sonuna "bird" əlavə edin.


const strArray = ["cat", "mouse", "panter", "chicken"];

strArray.shift(); //ilk element cat oldugu ucun shift funksiyasindan istifade edib onu silirik
strArray.push("bird"); // push funksiyasi ile sona bird sozunu elave edirik

console.log(strArray);




const array2 = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
    array2.push(array2[i] ** 2);
}
console.log(array2);






//Ədədlərdən ibarət array
const ededarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cutededler = [];

for (let i = 0; i < ededarray.length; i++) {

    if (ededarray[i] % 2 === 0) {

        cutededler.push(ededarray[i]);

    }

}
console.log(cutededler);
