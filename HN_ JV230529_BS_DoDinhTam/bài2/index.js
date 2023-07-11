let a = ' this is A tEst';
let arr = a.trim().split(' '); // hàm xoá khoảng trắng ở đầu
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  let trString = arr[i];
  let trStringLowercase = trString.toLowerCase();
  console.log(trStringLowercase);
  let trStringUppercase = trStringLowercase.charAt(0).toUpperCase() + trStringLowercase.slice(1);
  arr[i] = trStringUppercase;
}

let stringFix = arr.join(' ');
console.log('Chữ cái được sửa lại là: ' + stringFix);
