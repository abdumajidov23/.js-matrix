const array1 = [];

while (true) {
    let text = prompt("Son kiriting: ");

 if (!isNaN(text) && text !== null && text.trim() !== "") {
        array1.push(Number(text));
    } else {
        console.log("natija");
        break;
    }
}

console.log(array1);