//Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng
let a = prompt("Nhập mảng")
// -1,-20,-3,1,2,3,-41,4,5
let b = a.split(",");
let c =[];
let check=false;
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// if(a[1]===typeof(b)){
//     check
// }
b.forEach(element => {
    // UPPER.forEach(element2 => {
    //     if (element2!==element) {
    //         c.push(element);
    //     }
    // });
    if (UPPER.indexOf(element) === -1) {
        c.push(element)
    }
});
document.write(c);