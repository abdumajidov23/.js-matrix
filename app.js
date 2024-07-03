// const array1 = []

// const array2 = new Array(100)

// const mevalar = ["Olma","Anor","Uzum"]
// console.log(mevalar)
// console.log(mevalar[1])
// mevalar[10] = "Behi"
// console.log(mevalar)
// console.log(mevalar.length)

// const mevalar = ["Olma","Anor","Uzum"]
// mevalar.push("Behi","Shaftoli")

// console.log(mevalar)
// const meva = mevalar.pop()
// console.log(meva)

// const mevalar = ["Olma","Anor","Uzum"]
// mevalar.unshift("Behi","Shaftoli")
// console.log(mevalar)
// const meva = mevalar.shift()
// console.log(meva);


// const mevalar = ["Olma","Anor","Uzum"]
// console.log(mevalar[-1]);
// console.log(mevalar.at(-1));

// const frukti = mevalar
// console.log(frukti.shift());
// console.log(mevalar);

// const mevalar = ["Olma","Anor","Uzum"]
// mevalar.length = 10;

// console.log(mevalar);
// console.log(mevalar[1]);


// const mevalar = ["Olma","Anor","Uzum"]

// for (let index= 0 ; index < mevalar.length; index++) {
//     const element = mevalar[index];
//     console.log(element);
// };

// console.log("//////////////////")

// for (const meva of mevalar) {
//     console.log(meva);
// };

// console.log("//////////////////")

// for (const index in mevalar) {
//     console.log(index);
// };


////////////////////////////////////////////////////////////////////////

// const matrix =[
//     [1,2,3,12],
//     [4,5,6,13],
//     [7,8,9,15]
// ];

// const rowsCount = matrix.length;
// const columnsCount = matrix[0].length;
// console.log(matrix);
// console.log(rowsCount);
// console.log(columnsCount);

// for (let i = 0; i < matrix; i++) {
//     for (let j = 0; j < matrix[i].length;j++) {
//         const element = matrix[i][j];
//         console.log(element);
//     }
// };

//////////////////////////////////////////////////////////////////

// const matrix =[
    // [1,2,3,12],
    // [4,5,6,[13,14]],
    // [7,8,9,15]
// ];

// console.log(matrix.flat())

////////////////////////////////////////////////////////////////////

// const array1 = [];

// while (true) {
//     let text = prompt("Son kiriting: ");

//  if (!isNaN(text) && text !== null && text.trim() !== "") {
//         array1.push(Number(text));
//     } else {
//         console.log("natija");
//         break;
//     }
// }

// console.log(array1);


////////////////////////////////////////////////////////////////////

// const array1 = [];

// while (true) {
//     let text = prompt("Son kiriting: ");
const array1 = [];

// while (true) {
//     let text = prompt("Son kiriting: ");

//  if (!isNaN(text) && text !== null && text.trim() !== "") {
//         array1.push(Number(text));
//     } else {
//         console.log("natija");
//         break;
//     }
// }

// console.log(array1);
//  if (!isNaN(text) && text !== null && text.trim() !== "") {
//         array1.push(Number(text));
//     } else {
//         console.log("natija");
//         break;
//     }
// }

// console.log(array1);

////////////////////////////////////////////////////////////////////////////////////////////////


// const mevalar = ["olma","nok","uzum"];

// const mevalar2 = mevalar.slice(1,2);
// console.log(mevalar);
// console.log(mevalar2);

////////////////////////////////////////////////////////////////////////////////////////////////


// Let orr = [];
// do {
// son
// prompt("${ind++)-elementni kirit');
// if (isNaN(son)) {
// }
// break;
// orr.push(son);
// } while (true);
// Let-summa = 0;
// for (const el of arr) {
// }
// Summa
// el;
// console.log(summa);
// I


/////   //////////////////////////////////////////////////////////////////
// const mevalar = ["olma","nok","uzum"];

// const mevalar2 = mevalar.slice(1,2,"anor");
// console.log(mevalar2);
// console.log(mevalar);

///////////////////////////////////////////////////////////////////////


// const mevalar = [
    // "apple",
    // "banana",
    // "orange",
    // "apple",
    // "orange",
    // "banana",
// ];

// const frukti = mevalar.slice(1,3);
// const frukti = mevalar.slice();

// console.log(frukti);
// console.log(mevalar);
// frukti.push("behi");
// console.log(frukti);

/////////////////////////////////////////////////////////////////////// 

const  mevalar2 = ["apple","banana","orange","apple"];
const frukti  = ["red","black","blue"];

const mevalar = mevalar2.concat(frukti);

console.log(mevalar);
console.log(mevalar2);  