let arr = [4,32,12,-23,66,7,46];
arr.sort(
  function(a,b){
    return -(+a) - -(+b); 
  }
);
console.log(arr);

// không sử dụng hàm sort

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let arrSmall = arr[i];
        arr[i] = arr[j];
        arr[j] = arrSmall;
      }
    }
  }
  
  console.log(arr);