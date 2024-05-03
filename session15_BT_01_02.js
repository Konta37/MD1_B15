let a = prompt("Nhập mảng bất kì gồm 10 phần tử")
// 1,3,4,5,2,10,11,19,13,15
let b = a.split(",");
console.log("Chuyển đổi string sang array", b);
let max=0;
for (let i = 0; i < b.length; i++) {
    if (+b[i]>=max) {
        max=+b[i];
    }
}
document.write(max);

// let a = prompt("Nhập vào đấy số bất kỳ ngắn cách bởi dấu ,");
// let convert = a.split(",");
// console.log("Chuyển đổi string sang array", convert); // convert=[-89,57,-20,36,24,75]

// let max = convert[0];
// for(let i =0; i < convert.length; i++) {
//   if(max < convert[i]) {
//     max = convert[i]
//   }
// }
// console.log(max);