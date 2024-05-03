let a = prompt("Nhập mảng bất kì gồm 10 phần tử")
// 1,3,4,5,2,10,11,19,13,15
let b = a.split(",");
console.log("Chuyển đổi string sang array", b);
let max=0;
let tb=0;
for (let i = 0; i < b.length; i++) {
    if (+b[i]>=max) {
        max=+b[i];
    }
    tb=tb+(+b[i]);
}
tb=tb/b.length;
document.write(`trung bình của dãy là: ${tb} <br>`)
document.write(max);
// 1,10,9,15,14,20