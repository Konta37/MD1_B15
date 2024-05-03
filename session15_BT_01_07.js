let a = prompt("Nhập mảng")
// -1,-20,-3,1,2,3,-41,4,5
let b = a.split(",");
console.log("Chuyển đổi string sang array", b);
let c = parseFloat(prompt("Nhập số cần tìm"))
let d = b.findIndex((element,index)=>+element===c)
console.log(d);
if(d===-1){
    document.write(`Ko tìm thấy số nhập vào mảng hiện tại là:<br> ${b} <br>`)
}
else{
    b.splice(d, 1);
    document.write(b);
}
