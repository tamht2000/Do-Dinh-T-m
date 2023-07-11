let arr = [3,5,88,99,76,8,4,5,85,63];
let maxArr = arr[0];
for(let i = 1; i <= arr.length - 1; i++) {
    if(arr[i] > maxArr) {
        maxArr = arr[i];
    }
}
console.log('giá trị lớn nhất', maxArr);
