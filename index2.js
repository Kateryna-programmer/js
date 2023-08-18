console.log('Sample JavaScript #2 HW #14');
/*
 * #1
 * Создайте объект userObj, описывающий человека.
 * Следующие поля обязательны:
 * firstName – любое имя, строка
 * lastName – любая фамилия, строка
 * age – любой возраст, число
 */

let userObj = {
  firstName: 'Kateryna',
  lastName: 'Kostewa',
  age: 27,
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  },
};
/*
 * #2
 * Для объекта из п.1 создайте метод fullName, который будет возвращать полное имя,
 * состоящее из firstName и lastName, склеенных в строку через пробел.
 */

console.log(userObj.fullName());

/*
 * #3
 *
 * Дана функция defUpperStr('My text'), которая возвращает текст, преобразованный в верхний регистр, т.е:
 * defUpperStr('My text') → 'MY TEXT'.
 *
 * Если функция вызывается без параметра defUpperStr(), она не должна возвращать undefined,
 * в этом случае требуется вернуть строку текста по умолчанию в верхнем регистре, т.е:
 * defUpperStr() → 'DEFAULT TEXT'.
 *
 * При выполнении задачи не используйте оператор if, требуется решение с логическим оператором ||.
 */

function defUpperStr(text) {
  return (text || 'Default text').toUpperCase();
}
console.log(defUpperStr('My text')); // MY TEXTconsole.log(defUpperStr()); // DEFAULT TEXT

/*
 * #4
 * Создайте функцию evenFn(n), которая принимает параметром число – количество итераций цикла,
 * т.е. for 0..n. Функция должна вернуть массив, состоящий только из четных значений, генерируемых в цикле.
 *
 * Причем:
 * 0 не должен попадать в результирующий массив
 * цикл должен работать до n включительно
 * разрешен только оператор for
 */

function evenFn(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) if (i % 2 == 0) arr.push(i);
  return arr;
}
console.log(evenFn(10)); // [2, 4, 6, 8, 10]console.log(evenFn(15)); // [2, 4, 6, 8, 10, 12, 14]console.log(evenFn(20)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

/*
 * #5
 * Создайте функцию weekFn(n), которая принимает номер дня недели, а возвращает его название.
 * Если вводится строка, любое дробное число или число вне диапазона 1..7 – функция должна вернуть null.
 * В реализации функции обязательно должны быть использованы операторы switch / case / default.
 */

function weekFn(num) {
  let string = '';
  switch (num) {
    case 1:
      string = 'Понедельник';
      break;
    case 2:
      string = 'Вторник';
      break;
    case 3:
      string = 'Среда';
      break;
    case 4:
      string = 'Четверг';
      break;
    case 5:
      string = 'Пятница';
      break;
    case 6:
      string = 'Суббота';
      break;
    case 7:
      string = 'Воскресенье';
      break;
    default:
      string = null;
  }
  return string;
}
console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(3)); // 'Среда'
console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn('2')); // null

/*
 * #6
 *
 * создайте функцию ageClassification(n), которая будет в качестве параметра принимать любые числа
 * и возвращать строку согласно следующим условиям, n:
 *           менее 0 – null
 *             0..24 – 'детский возраст'
 *           24+..44 – 'молодой возраст'
 *           44+..65 – 'средний возраст'
 *           65+..75 – 'пожилой возраст'
 *           75+..90 – 'старческий возраст'
 *          90+..122 – 'долгожители'
 *         более 122 – null
 * При выполнении задания допускается использовать только тернарный оператор ?.
 * Использование операторов if, switch – запрещено.
 */

// function ageClassification(n) {
//   let str = '';
//   if (n > 0 && n <= 24) {
//     str = 'детский сад';
//   } else if (n > 24 && n <= 44) {
//     str = 'молодой возраст';
//   } else if (n > 44 && n <= 65) {
//     str = 'средний возраст';
//   } else if (n > 65 && n <= 75) {
//     str = 'пожилой возраст';
//   } else if (n > 75 && n <= 90) {
//     str = 'старческий возраст';
//   } else if (n > 90 && n <= 120) {
//     str = 'долгожители';
//   } else if (n < 0 || n > 122) {
//     str = null;
//   }
//   return str;
// }
function ageClassification(n) {
  return (str =
    n > 0 && n <= 24
      ? 'детский возраст'
      : n > 24 && n <= 44
      ? 'молодой возраст'
      : n > 44 && n <= 65
      ? 'средний возраст'
      : n > 65 && n <= 75
      ? 'пожилой возраст'
      : n > 75 && n <= 90
      ? 'старческий возраст'
      : n > 90 && n <= 122
      ? 'долгожители'
      : null);
}
console.log('    -1 :', ageClassification(-1)); // -1 : null
console.log('     1 :', ageClassification(1)); // 1 : детский возраст
console.log('    24 :', ageClassification(24)); // 24 : детский возраст
console.log(' 24.01 :', ageClassification(24.01)); // 24.01 : молодой возраст
console.log('    44 :', ageClassification(44)); // 44 : молодой возраст
console.log(' 44.01 :', ageClassification(44.01)); // 44.01 : средний возраст
console.log('    65 :', ageClassification(65)); // 65 : средний возраст
console.log('  65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст
console.log('    75 :', ageClassification(75)); // 75 : пожилой возраст
console.log(' 75.01 :', ageClassification(75.01)); // 75.01 : старческий возраст
console.log('    90 :', ageClassification(90)); // 90 : старческий возраст
console.log(' 90.01 :', ageClassification(90.01)); // 90.01 : долгожители
console.log('   122 :', ageClassification(122)); // 122 : долгожители
console.log('122.01 :', ageClassification(122.01)); // 122.01 : null
console.log('   150 :', ageClassification(150)); // 150 : null

/*
 * #7
 *
 * Создайте функцию oddFn(n), которая принимает параметром число – количество итераций цикла.
 * Функция должна вернуть массив, состоящий только из нечетных значений, генерируемых в цикле.
 *
 * Причем:
 * 0 не должен попадать в результирующий массив
 * цикл должен работать до n включительно
 * разрешен только оператор while
 */

function oddFn(n) {
  let arr = [];
  let i = 0;
  while (i++ <= n - 1)
    if (i % 2 !== 0) {
      arr.push(i);
    }
  return arr;
}
console.log(oddFn(10)); // [1, 3, 5, 7, 9]
console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

/*
 * #8
 * Создайте основную функцию mainFunc(a, b, func), которая принимает три параметра:
 * a – число
 * b - число
 * func –  обрабатывающая параметры a и b, возвратная (callback) функция
 *
 * Реализуйте проверку: если третьим параметром передается не функция, нужно вернуть false.
 */
function mainFunc(a, b, func) {
  if (func && typeof func === 'function') {
    return func(a, b);
  }
  return false;
}
/* * реализуйте следующие функции, которые будут осуществлять механизм callback в основной функции,
 * возвращая ей результат собственного вычисления...
 * для возведения в степень и получения произвольного значения можете воспользоваться методами объекта Math.
 */
// cbRandom(a, b) – вычисляет и возвращает произвольное целое число в диапазоне между a и b включительно.
function cbRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// cbPow(a, b) – вычисляет и возвращает результат возведения числа a в степень b.
function cbPow(a, b) {
  return Math.pow(a, b);
}
// cbAdd(a, b) – вычисляет и возвращает сумму двух чисел a и b.
function cbAdd(a, b) {
  return a + b;
}
console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, 'not a func')); // false
