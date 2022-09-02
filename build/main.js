"use strict";
console.log("Hello TypeScript");
// Data types (Kiểu dữ liệu)
// string, number,boolean, null , undefined, Array, object
let username = "TypeScript";
// username = 10 => Lỗi
username = "Tiến Phát";
let fullName;
// fullName = false => Lỗi
fullName = "Phát mập";
let score = 10;
let isLogin = false;
let n = null;
let u = undefined;
// Array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c", "d", "e", "f"];
// Tuple
let tuple = ["Score", 0];
// Enum
var Color;
(function (Color) {
    Color["black"] = "#000";
    Color["white"] = "#fff";
    Color["red"] = "#f00";
})(Color || (Color = {}));
console.log(Color.black);
// Khai báo kiểu dữ liệu trả về cho 1 hàm
const sum = (a, b) => {
    return a + b;
};
// Void
const doSomeThing = () => {
    console.log("DoSomeThing");
};
// object
const student1 = {
    name: "Phat Nguyen",
    email: "phat@gmail.com",
    age: 23,
};
console.log(student1.name);
const student2 = {
    name: "Phat Nguyen",
    email: "phat@gmail.com",
};
console.log(student2.age); // undefined
// Class
class User {
    //  Access modifier : khai báo scope của property
    //   private : chỉ sử dụng được bên trong class
    // public : Sử dụng được ở mọi nơi
    // protected: Sử dụng được bên trong class và những class kế thừa nó
    //   private firstName: string;
    //   protected lastName: string;
    //   public age: number;
    constructor(_firstName, lastName, age) {
        this._firstName = _firstName;
        this.lastName = lastName;
        this.age = age;
        this._firstName = _firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
const user = new User("Phat", "Nguyen", 23);
console.log(user.firstName);
user.firstName = "Trang";
console.log(user.firstName);
class Staff {
    constructor(fullName, email, age) {
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.fullName = fullName;
        this.email = email;
        this.age = age;
    }
    getSalary() {
        return 1000;
    }
}
class IT extends Staff {
    constructor(fullName, email, age, title) {
        super(fullName, email, age);
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.title = title;
        this.title = title;
    }
    getSalary() {
        return super.getSalary() * 5;
    }
}
const it1 = new IT("Phát", "phat@gmail.com", 23, "Junior");
console.log(it1);
class NhanVienThietKe {
    constructor(hoTen, tuoi, chucVu, heSoLuong) {
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.chucVu = chucVu;
        this.heSoLuong = heSoLuong;
    }
    tinhLuong() {
        return 3000;
    }
    thucHienCongViec() {
        console.log("Thiet ke noi that");
    }
}
// Xe -Oto, moto
// - Bởi vì Oto và moto cùng là xe nên ta sẽ tạo 1 class xe để Oto, moto kế thừa những đặc tính của xe
// - Tuy nhiên Oto, moto nó có những hành vi khác nhau, tạo 1 interface sử dụng cho thằng oto, và 1 interface sử dụng cho thằng moto
// class Header extends Component
// Mỗi lifecycle method của angular sẽ tương ứng với 1 interface
// interface OnInit {
//   ngOnInit(): void;
// }
// class Header implements OnInit,{
//   ngOnInit(){
//   }
// }
const getDataString = (value) => {
    // Thực hiện logic
    return value;
};
getDataString("Hello");
const getDataNumber = (value) => {
    // Thực hiện logic
    return value;
};
getDataNumber(5);
// Generic
const getData = (value) => {
    return value;
};
// Định nghĩa kiểu dữ liệu khi gọi hàm
getData(5);
getData("Hello");
// Hàm này không biết trước được kiểu dữ liệu trả về của hàm là gì, vì nó phụ thuộc vào URL
// const getAPI = <T>(url: string): T => {
//   return axios.get(url);
// };
// getAPI<string[]>("LayDanhSachPhim");
// getAPI<Movie>('layThongTinPhim')
// Data type nâng Cao
// hoặc - |
let data1;
data1 = "Hello";
data1 = 5;
let data2 = null;
data2 = ["a", "b", "c"];
let data3;
let data4 = {
    a: 1,
    b: "hello",
};
// TypeScript còn hỗ trợ 1 số built in type
// Record
const obj = {
    name: "Phat",
    age: 23,
    email: "abc",
    address: "OK",
    //   isAdmin: true => Lỗi
};
const btn = document.getElementById("submit");
// btn.addEventListener
const input = document.getElementById("username");
// input.value
