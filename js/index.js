//1 - Создайте объект person с полями name, age, city и country. Используйте деструктуризацию объекта для извлечения значений name и age в отдельные переменные.

// const user = {
//   name: "Sam",
//   age: 30,
//   city: "Baku",
//   country: "Azerbaijan",
// };

// const { name, age } = user;

// console.log(first)

//2 - Создайте функцию printPersonInfo, которая принимает объект person в качестве параметра и выводит в консоль информацию о человеке, используя деструктуризацию объекта.

// function printPersonInfo(user) {
//   const { name, age, city, country } = user;
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`City: ${city}`);
//   console.log(`Country: ${country}`);
// }

// const user = {
//   name: "Sam",
//   age: 30,
//   city: "Baku",
//   country: "Azerbaijan",
// };

// printPersonInfo(user);

//3 - Создайте функцию getFullName, которая принимает объект person с полями firstName и lastName, и возвращает их объединенное значение, используя деструктуризацию объекта.

// function getFullName(user) {
//   const { firstName, lastName } = user;
//   return `${firstName} ${lastName}`;
// }

// const user = {
//   firstName: "Sam",
//   lastName: "Samsky",
// };

// const fullName = getFullName(user);
// console.log(fullName);

//4 - Создайте объект user с полями name и address, где address сам является объектом с полями city и country. Используйте деструктуризацию объекта для извлечения значений city и country в отдельные переменные

// const user = {
//   name: "Sam",
//   address: {
//     city: "Baku",
//     country: "AZ",
//   },
// };

// const {
//   address: { city, country },
// } = user;

// console.log(city);
// console.log(country);

//5 - Создайте функцию printAddress, которая принимает объект user в качестве параметра и выводит в консоль его адрес, используя деструктуризацию объекта.

// const user = {
//   name: "Sam",
//   address: {
//     city: "Baku",
//     country: "AZ",
//   },
// };

// function printAddress(user) {
//   const {
//     address: { city, country },
//   } = user;
//   console.log(`City ${city}`);
//   console.log(`Country ${country}`);
// }

// printAddress(user);

//6 - Создайте объект product с полями name, price и category. Используйте деструктуризацию объекта для извлечения значений name и price в отдельные переменные.

// const product = {
//   name: "Coffee",
//   price: 6,
//   category: "Drinks",
// };

// const { name, price } = product;

// console.log(`Product name: ${name}`);
// console.log(`Product price: ${price}`);

//7 - Создайте функцию applyDiscount, которая принимает объект product и скидку в процентах в качестве параметров, и возвращает объект product с примененной скидкой, используя деструктуризацию объекта.

// function applyDiscount(product, discountPercent) {
//   const { price } = product;

//   const discountAmount = (price * discountPercent) / 100;
//   const discountedPrice = price - discountAmount;
//   return {
//     ...product,
//     price: discountedPrice,
//   };
// }

// const product = {
//   name: "Coffee",
//   price: 6,
//   category: "Drinks",
// };

// const discountPercent = 20;
// const discountedProduct = applyDiscount(product, discountPercent);
// console.log(discountedProduct);

//8 - Создайте объект rectangle с полями width и height. Используйте деструктуризацию объекта для создания переменных w и h, которые будут содержать значения этих полей.

// const rectangle = {
//   width: 10,
//   height: 5,
// };

// const { width: w, height: h } = rectangle;

// console.log(`Width: ${w}`);
// console.log(`Height: ${h}`);

//9 - Создайте функцию calculateArea, которая принимает объект rectangle в качестве параметра и возвращает его площадь, используя деструктуризацию объекта.

// function calculateArea(rectangle) {
//   const { width, height } = rectangle;

//   const area = width * height;

//   return area;
// }

// const rectangle = {
//   width: 10,
//   height: 5,
// };

// const area = calculateArea(rectangle);

// console.log(area);

//10 - Создайте объект stats с полями max, min и average. Используйте деструктуризацию объекта для извлечения значений max, min и average в отдельные переменные.

// const stats = {
//   max: 100,
//   min: 10,
//   average: 55,
// };

// const { max, min, average } = stats;

// console.log(`Max ${max}`);
// console.log(`Min ${min}`);
// console.log(`Average ${average}`);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//1 - Создайте функцию swapValues, которая принимает массив с двумя элементами и меняет их местами, используя деструктуризацию массива

// function swapFn([firstValue, secondValue]) {
//   return [secondValue, firstValue];
// }

//2 - Создайте массив coordinates с двумя значениями [x, y]. Используйте деструктуризацию массива для создания переменных x и y, содержащих эти значения.

// const coordinates = [10, 20];
// const [x, y] = coordinates;

// console.log(`X value ${x}`);
// console.log(`Y value ${y}`);

//3 - Создайте функцию getDistance, которая принимает два массива pointA и pointB, представляющих координаты точек [x, y], и возвращает расстояние между этими точками, используя деструктуризацию массивов.

// function getDistance(pointA, pointB) {
//   const [x1, y1] = pointA;
//   const [x2, y2] = pointB;

//   const distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

//   return distance;
// }

// const pointA = [0, 0];
// const pointB = [3, 4];

// const distance = getDistance(pointA, pointB);

// console.log(distance);

//4 - Создайте массив grades с оценками студентов. Используйте деструктуризацию массива для извлечения первой, второй и третьей оценок в отдельные переменные.
// const grades = [85, 90, 75, 95, 80];

// const [firstGrade, secondGrade, thirdGrade] = grades;

// console.log(`First Grade : ${firstGrade}`);
// console.log(`Second Grade : ${secondGrade}`);
// console.log(`Third Grade : ${thirdGrade}`);

//5 - Создайте функцию getAverage, которая принимает массив grades и возвращает среднее значение оценок, используя деструктуризацию массива.
// const grades = [85, 90, 75, 95, 80];

// function getAverage(grades) {
//   const [firstGrade, secondGrade, thirdGrade, ...otherGrades] = grades;
//   let sum = firstGrade + secondGrade + thirdGrade;
//   for (const grade of otherGrades) {
//     sum += grade;
//   }

//   const average = sum / grades.length;
//   return average;
// }

// const average = getAverage(grades);

// console.log(average);

//6 - Создайте массив student с данными студента: [name, age, grades]. Используйте деструктуризацию массива для извлечения имени и возраста студента в отдельные переменные.
// const student = ["Sam", 20, [85, 90, 75]];

// const [name, age, grades] = student;

// console.log(`Name ${name}`);
// console.log(`Age ${age}`);
// console.log(`Grades ${grades}`);

//7 - Создайте функцию printStudentInfo, которая принимает массив student и выводит информацию о студенте в консоль, используя деструктуризацию массива.

// function printStudentInfo(student) {
//   const [name, age, grades] = student;
//   console.log(`Name ${name}`);
//   console.log(`Age ${age}`);
//   console.log(`Grades ${grades}`);
// }

// const student = ["Sam", 20, [85, 90, 75]];
// printStudentInfo(student);

//8 - Создайте массив colors с названиями цветов. Используйте деструктуризацию массива для извлечения первого, второго и третьего цветов в отдельные переменные.

// const colors = ["Red", "Purple", "Black", "White", "Indigo"];

// const [firstColor, secondColor, thirdColor] = colors;

// console.log(`First Color: ${firstColor}`);
// console.log(`Second Color: ${secondColor}`);
// console.log(`Third Color: ${thirdColor}`);

//9 - Создайте функцию combineColors, которая принимает массивы colors1 и colors2, и возвращает объединенный массив цветов, используя деструктуризацию массивов.

// function combineColors(colors1, colors2) {
//   const combinedColors = [...colors1, ...colors2];
//   return combinedColors;
// }

// const colors1 = ["Red", "Purple", "Black"];
// const colors2 = ["White", "Indigo", "Orange"];

// const combinedColors = combineColors(colors1, colors2);

// console.log(combinedColors);
