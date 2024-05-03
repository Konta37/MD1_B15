let a = [-1,-20,-3,1,2,3,-41,4,5]
// -1,-20,-3,1,2,3,-41,4,5
// let b = a.split(",");
// console.log("Chuyển đổi string sang array", b);
let c = parseFloat(prompt("Nhập số cần tìm"))
let d = a.find((element,index)=>element===c)
if(d===undefined){
    document.write(`Number ${c} is not in the array`)
}
else{
    document.write(`Number ${c} is in the array`)
}