// function add(x, y) {
//   return x + y;
// }
// console.log(add(4,5));

// let x;
// let y=5;
// try {
//     console.log(add(x,y));
// }
// catch(e){
//     console.log(e)
// }

// let x=5;
// let y=0;
// const divide=(x,y) =>{
//     return x/y;
// }
// console.log(divide);
// const divide = (x, y) => {
//     if (y === 0) {
//         throw Error("Cannot divide by 0");
//     }
//     return x / y;
// }
// let x = 5;
// let y = 0;
// try {
//     console.log(divides(x, y));
// } catch (err) {
//     console.log("Error: " + err);
// }

// // const ages = [32, 33, 16, 40];
// // const result = ages.filter((list)=>list>32);

// function getEven(arr) {
// 	if (arr && arr.length > 0) {
// 			return arr.filter(function (x) {
// 					return x % 2 === 0
// 			})
// 	}

// 	return [];

//}

function plandrome(str)
{
    let array= str.split("");
    let reversearray=array.reverse();
    let comparer=reversearray.join("").toString();
    //console.log(comparer)
    //console.log(reversearray)
    if(str===comparer){
        console.log("String is Plandrome")
    }
    else {
        console.log("STRING IS NOT PLANDROME")
    }
}

plandrome("AHMAD")


let countingSort = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};
//let array =[0,1,2,3,4,5,6,7,8,9,10,3,4,5,6]
countingSort(15,0,10);
console.log(countingSort(15,0,10));

 