let a = prompt("Nhập mảng thứ 1 bất kì gồm 10 phần tử")
// 1,2,3,4,5,6,7,8,9,10
let c = prompt("Nhập mảng thứ 2 bất kì gồm 10 phần tử")
// -10,-9,-8,-7,-6,-5,-4,-3,-2,1,-1
let b = a.split(",");
let d = c.split(",");
let s = d+b;
document.write(s);
document.write(`<br>Mảng 1: ${b}<br>`);
document.write(`Mảng 2: ${d}<br>`);