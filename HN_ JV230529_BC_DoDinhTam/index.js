let btnSelector = document.querySelector('.save_data');
let tbody = document.querySelector('tbody');
let nameSelector = document.querySelector('#name');
let emailSelector = document.querySelector('#email');
let phoneSelector = document.querySelector('#phone');
let addressSelector = document.querySelector('#address');
let sortButton = document.querySelector('.sort_name');
let sortButtonVn = document.querySelector('.sort_name_vn');
let btnSearch = document.querySelector('.btn_search');
let inputSearch = document.querySelector('.search input');

let students = [
    {
        id: crypto.randomUUID(),
        name: 'rikkei',
        email: 'rikei@gmail.com',
        phone: '0823868888',
        address: 'Hà Nội',
        sex: 'Nam',
    },
    {
        id: crypto.randomUUID(),
        name: 'academy',
        email: 'academy@gmail.com',
        phone: '0828638888',
        address: 'HCM',
        sex: 'Nữ',
    }
];



function showListStudent() {
    
    let resultHtml = '';
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        
        resultHtml = resultHtml + ` <tr>
                <td>${i + 1}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.address}</td>
                <td>${student.sex}</td>
                <td>
                    <button type="button" data-id="${student.id}" class="btn btn-blue">Edit</button>
                    <button type="button" data-id="${student.id}" class="btn btn-danger">Delete</button>
                </td>
            </tr>`
    }
    tbody.innerHTML = resultHtml;
}

function handleAddStudent(event) {
    let name = nameSelector.value;
    let email = emailSelector.value;
    let address = addressSelector.value;
    let phone = phoneSelector.value;
    let sex = document.querySelector('.gender_check:checked').value;

    

    if (event.target.classList.contains('update')) {
        let idUpdate = event.target.getAttribute('data-id');
        let indexEdit;
        for (let i = 0; i < students.length; i++) {
            if (students[i].id === idUpdate) {
                indexEdit = i;
                break;
            }
        }
        students[indexEdit].name = name;
        students[indexEdit].email = email;
        students[indexEdit].address = address;
        students[indexEdit].phone = phone;
        students[indexEdit].sex = sex;

        showListStudent();
        document.querySelector('form').reset();
        btnSelector.classList.remove('update');
        btnSelector.removeAttribute('data-id');
        btnSelector.innerText = 'Lưu Lại';


    } else {
        document.querySelector('.table').classList.remove('hollow');
        document.querySelector('.header_flex').innerText = 'Danh sách sinh viên';
        
        
        
        if(nameSelector.value === '') {
            alert('vui lòng nhập tên.');
            return;
        } else if(addressSelector.value === '') {
            alert('vui lòng nhập địa chỉ.');
            return;
        }

        
        let objStudentAdd = {
            id: crypto.randomUUID(),
            name: name,
            email: email,
            address: address,
            phone: phone,
            sex: sex,
        };
        
            students.push(objStudentAdd);
            showListStudent();
            document.querySelector('form').reset();
        


        
    }


}

function handleProcessStudent(event) {
    let clicked = event.target;
    if (clicked.classList.contains('btn-danger')) {
        let confirmDelete = confirm('Bạn chắc chắn muốn xóa không ?');

        if (confirmDelete) {
            let idDelete = clicked.getAttribute('data-id');
            let indexDelete;
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === idDelete) {
                    indexDelete = i;
                    break;
                }
            }
            students.splice(indexDelete, 1);


            if (students.length === 0) {
                document.querySelector('.table').classList.add('hollow');
                document.querySelector('.header_flex').innerText = 'Danh sách trống';
            }

            showListStudent();
            document.querySelector('form').reset();
            btnSelector.classList.remove('update');
            btnSelector.removeAttribute('data-id');
            btnSelector.innerText = 'Lưu Lại';
        }


    } else if (clicked.classList.contains('btn-blue')) {
        let idEdit = clicked.getAttribute('data-id');
        let indexEdit;
        for (let i = 0; i < students.length; i++) {
            if (students[i].id === idEdit) {
                indexEdit = i;
                break;
            }
        }
        let objEdit = students[indexEdit];
        nameSelector.value = objEdit.name;
        emailSelector.value = objEdit.email;
        phoneSelector.value = objEdit.phone;
        addressSelector.value = objEdit.address;
        document.querySelector(`input[value=${objEdit.sex}]`).checked = true;
       
        

        btnSelector.classList.add('update');
        btnSelector.setAttribute('data-id', idEdit);
        btnSelector.innerText = 'Update';


    }
}

function handleSortStudent() {
    students.sort(
        function(a, b) {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if(nameA < nameB) {
                return -1;
            }
            if(nameA > nameB) {
                return 1;
            }
            return 0;
        }
    )
    showListStudent();
}



function handleSearch() {
    let valueSearch = inputSearch.value.toLowerCase();
    let studentFilter = students.filter(
        function(studentItem) {
            return studentItem.name.toLowerCase().includes(valueSearch);
        }
    );
    let resultHtml = '';
    for (let i = 0; i < studentFilter.length; i++) {
        let student = studentFilter[i];
        resultHtml = resultHtml + ` <tr>
                <td>${i + 1}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.address}</td>
                <td>${student.sex}</td>
                <td>
                    <button type="button" data-id="${student.id}" class="btn btn-blue">Edit</button>
                    <button type="button" data-id="${student.id}" class="btn btn-danger">Delete</button>
                </td>
            </tr>`
    }
    tbody.innerHTML = resultHtml;
}


showListStudent();
btnSelector.addEventListener('click', handleAddStudent);
tbody.addEventListener('click', handleProcessStudent);
sortButton.addEventListener('click', handleSortStudent);
btnSearch.addEventListener('click', handleSearch);