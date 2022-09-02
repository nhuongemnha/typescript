console.log("Hello TypeScript");

// Data types (Kiểu dữ liệu)

// string, number,boolean, null , undefined, Array, object

let username = "TypeScript";
// username = 10 => Lỗi
username = "Tiến Phát";

let fullName: string;
// fullName = false => Lỗi
fullName = "Phát mập";

let score: number = 10;

let isLogin: boolean = false;

let n: null = null;
let u: undefined = undefined;

// Array
let arr1: Array<number> = [1, 2, 3, 4, 5];
let arr2: string[] = ["a", "b", "c", "d", "e", "f"];

// Tuple
let tuple: [string, number] = ["Score", 0];

// Enum
enum Color {
  black = "#000",
  white = "#fff",
  red = "#f00",
}

console.log(Color.black);

// Khai báo kiểu dữ liệu trả về cho 1 hàm
const sum = (a: number, b: number): number => {
  return a + b;
};

// Void
const doSomeThing = (): void => {
  console.log("DoSomeThing");
};

// interface, type: dùng để định nghĩa kiểu dữ liệu cho 1 object
// interface Student {
//   name: string;
//   email: string;
//   age?: number; //Optional property
// }

type Student = {
  name: string;
  email: string;
  age?: number; //Optional property
};

// object
const student1: Student = {
  name: "Phat Nguyen",
  email: "phat@gmail.com",
  age: 23,
};

console.log(student1.name);

const student2: Student = {
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

  constructor(
    private _firstName: string,
    protected lastName: string,
    public age: number
  ) {
    this._firstName = _firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }
}

const user = new User("Phat", "Nguyen", 23);
console.log(user.firstName);

user.firstName = "Trang";
console.log(user.firstName);

class Staff {
  constructor(
    protected fullName: string,
    protected email: string,
    protected age: number
  ) {
    this.fullName = fullName;
    this.email = email;
    this.age = age;
  }

  public getSalary() {
    return 1000;
  }
}

class IT extends Staff {
  constructor(
    protected fullName: string,
    protected email: string,
    protected age: number,
    private title: string
  ) {
    super(fullName, email, age);
    this.title = title;
  }

  public getSalary(): number {
    return super.getSalary() * 5;
  }
}

const it1 = new IT("Phát", "phat@gmail.com", 23, "Junior");
console.log(it1);

interface NhanVien {
  hoTen: string;
  tuoi: number;
  tinhLuong(): number;
  thucHienCongViec(): void;
}

interface ChucVu {
  chucVu: string;
  heSoLuong?: number; //Không bắt buộc phải định nghĩa khi class implements interface
}

class NhanVienThietKe implements NhanVien, ChucVu {
  hoTen: string;
  tuoi: number;
  chucVu: string;
  heSoLuong: number;

  constructor(hoTen: string, tuoi: number, chucVu: string, heSoLuong: number) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
    this.chucVu = chucVu;
    this.heSoLuong = heSoLuong;
  }

  tinhLuong(): number {
    return 3000;
  }
  thucHienCongViec(): void {
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

const getDataString = (value: string): string => {
  // Thực hiện logic
  return value;
};

getDataString("Hello");

const getDataNumber = (value: number): number => {
  // Thực hiện logic

  return value;
};

getDataNumber(5);

// Generic

const getData = <T>(value: T): T => {
  return value;
};

// Định nghĩa kiểu dữ liệu khi gọi hàm
getData<number>(5);
getData<string>("Hello");

// Hàm này không biết trước được kiểu dữ liệu trả về của hàm là gì, vì nó phụ thuộc vào URL
// const getAPI = <T>(url: string): T => {
//   return axios.get(url);
// };

// getAPI<string[]>("LayDanhSachPhim");
// getAPI<Movie>('layThongTinPhim')

// Data type nâng Cao

// hoặc - |

let data1: string | number;
data1 = "Hello";
data1 = 5;

let data2: string[] | null = null;

data2 = ["a", "b", "c"];

// Alias type: dùng để tái sử dụng 1 định nghĩa type bất kì
type StringOrNumber = string | number;

let data3: StringOrNumber;

// và - &

type A = { a: number };
type B = { b: string };

let data4: A & B = {
  a: 1,
  b: "hello",
};

// Ứng dụng: Tái sử dụng đinh nghĩa StyleProps cho các type khác
type StyleProps = {
  color: string;
  backgroundColor: string;
};

type ButtonProps = {
  type: string;
  onClick(): void;
} & StyleProps;

type CardProps = {
  title: string & StyleProps;
};

// TypeScript còn hỗ trợ 1 số built in type

// Record
const obj: Student & Record<string, string | number> = {
  name: "Phat",
  age: 23,
  email: "abc",
  address: "OK",
  //   isAdmin: true => Lỗi
};

type Person = {
  fullName: string;
  age: number;
  email: string;
};

// Pick: Dựa vào 1 type có sẵn để tạo ra 1 type mới bằng cách chọn những property bên trong type có sẵn

type PersonA = Pick<Person, "fullName" | "age">;

// Omit: Dựa vào 1 type có sẵn để tạo ra 1 type mới bằng cách loại bỏ những property bên trong type có sẵn
type PerSonB = Omit<Person, "email">;

const btn = <HTMLButtonElement>document.getElementById("submit");

// btn.addEventListener

const input = <HTMLInputElement>document.getElementById("username");
// input.value
