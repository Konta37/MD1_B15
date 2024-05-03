let a = prompt("Nhập mảng bất kì gồm 10 phần tử")
// -1,-20,-3,1,2,3,-41,4,5
let b = a.split(",");
console.log("Chuyển đổi string sang array", b);
let count =0;
for (let i = 0; i < b.length; i++) {
    if(+b[i]<0)
    {
        count++;
    }
}
document.write(count);