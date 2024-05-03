// VD: 1,3,5,12,65,98
let n = prompt("Nhập vào đây số bất kỳ được ngăn cách bởi dấu ,");
let convert = n.split(",");
console.log("Chuyển đổi string sang array", convert); // convert=[1,3,5,12,65,98]


console.log("Sử dụng phương thức reverse()", convert.reverse()); //[98,65,12,5,3,1]