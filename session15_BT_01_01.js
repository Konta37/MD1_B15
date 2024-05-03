// let a = [11,15,5,14,13,9,2,5,20,3]
// let b=[]
// for (let i = 0; i < a.length; i++) {
//     if (a[i]>=10) {
//         b.push(a[i]);
//     }
    
// }
// document.write("Dãy a có giá trị:<br>");
// document.write(a);
// document.write("<br>Dãy b có giá trị các phần tử mà >=10 trong dãy a<br>");
// document.write(b);

let a = prompt("Nhập mảng bất kì gồm 10 phần tử")
// 1,3,4,5,2,10,11,19,13,15
let b = a.split(" ");
let count=0;
for (let i = 0; i < b.length; i++) {
    if (b[i]>=10) {
        count++
    }
}
console.log(count);