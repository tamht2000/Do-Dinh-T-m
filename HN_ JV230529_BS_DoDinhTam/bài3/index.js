let month = +prompt('nhập tháng');
let year = +prompt('nhập năm');


 
if(month >= 1 && month <=12)  {
    if(month === 2) {
        if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            console.log('tháng' + month + ' 29 ngày');
        } else {
            console.log('tháng' + month + ' 28 ngày');
        }
        

    }else if( month % 2 ===0) {
        console.log('tháng' + month + 'có 30 ngày');
    } else {
        console.log('tháng' + month + 'có 31 ngày');
    }

} else  {
    console.log('không có thông tin');
}