let a = prompt("Nhập mảng")
// -1,-20,-3,1,2,3,-41,4,5
let b = a.split(",");
document.write("Chuyển đổi string sang array", b);
b.sort(function(c, d){return d - c})
document.write(`<br>${b}`);