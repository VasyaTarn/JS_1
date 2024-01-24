// 1
let userName = prompt("Введіть ваше ім'я:");
alert(`Привіт, ${userName}!`);

// 2
const currentYear = new Date().getFullYear();
let birthYear = prompt("Введіть ваш рік народження:");
let age = currentYear - birthYear;
alert(`Вам ${age} років.`);

// 3
let sideLength = prompt("Введіть довжину сторони квадрата:");
let perimeter = 4 * sideLength;
alert(`Периметр квадрата дорівнює ${perimeter}.`);

// 4
let radius = prompt("Введіть радіус кола:");
let area = Math.PI * Math.pow(radius, 2);
alert(`Площа кола дорівнює ${area}.`);

// 5
let distance = prompt("Введіть відстань між містами (в км):");
let time = prompt("За скільки годин ви хочете дістатися?");
let speed = distance / time;
alert(`Щоб встигнути вчасно, потрібно рухатися зі швидкістю ${speed} км/год.`);

// 6
const exchangeRate = 0.85; 
let dollars = prompt("Введіть суму у доларах:");
let euros = dollars * exchangeRate;
alert(`Сума у євро дорівнює ${euros}.`);

// 7
let flashDriveCapacity = prompt("Введіть обсяг флешки у ГБ:");
let fileCapacity = 820; 
let filesCount = Math.floor(flashDriveCapacity * 1024 / fileCapacity);
alert(`На флешці поміститься ${filesCount} файлів розміром 820 МБ.`);

// 8
let walletMoney = prompt("Введіть суму грошей у гаманці:");
let chocolatePrice = prompt("Введіть вартість однієї шоколадки:");
let chocolateCount = Math.floor(walletMoney / chocolatePrice);
let change = walletMoney % chocolatePrice;
alert(`Ви можете купити ${chocolateCount} шоколадок, і у вас залишиться ${change} грн здачі.`);

// 9
let threeDigitNumber = prompt("Введіть тризначне число:");
let reversedNumber = Number(String(threeDigitNumber).split('').reverse().join(''));
alert(`Паліндром вашого числа: ${reversedNumber}.`);

// 10
let userNumber = prompt("Введіть ціле число:");
let result = (userNumber % 2 === 0) ? "Парне" : "Непарне";
alert(result);