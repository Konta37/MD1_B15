let a = prompt("Nhập mảng")
// -1,-20,-3,1,2,3,-41,4,5
let b = a.split(",");
let c = prompt("Nhập mảng")
// -1,-20,-3,1,2,3,-41,4,5
let d = c.split(",");
let count=0;

b.forEach(element => {
    d.forEach(element2 => {
        if (element2===element) {
            count++
        }
    });
});
if (count==b.length&&count==d.length) {
    document.write(`2 chuỗi giống nhau <br>`)
    document.write(`count: ${count} và chuỗi 1: ${b} và chuỗi 2: ${d}`)

}else
{
    document.write(`2 chuỗi khác nhau <br>`)
    document.write(`count: ${count} và chuỗi 1: ${b} và chuỗi 2: ${d}`)
}