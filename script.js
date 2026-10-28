// --- Завдання 1 ---
function processArray(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

function doubleElement(element) {
    return element * 2;
}

function reverseElement(element) {
    return String(element).split('').reverse().join('');
}

console.log("Завдання 1:");
console.log(processArray([1, 2, 3, 4, 5], doubleElement));
console.log(processArray(["hello", "world"], reverseElement));


// --- Завдання 2 ---
function filterArray(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function isEven(number) {
    return number % 2 === 0;
}

function isShortWord(word) {
    return word.length <= 4;
}

console.log("\nЗавдання 2:");
console.log(filterArray([1, 2, 3, 4, 5], isEven));
console.log(filterArray(["cat", "elephant", "dog", "bird"], isShortWord));


// --- Завдання 3 ---
function washDishes() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Посуд вимито"), 2000);
    });
}

function cleanRoom() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Кімнату прибрано"), 4000);
    });
}

function makeDinner() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Вечеря приготована"), 7000);
    });
}

console.log("\nЗавдання 3 (чекай виводу...):");
washDishes()
    .then(res => {
        console.log(res);
        return cleanRoom();
    })
    .then(res => {
        console.log(res);
        return makeDinner();
    })
    .then(res => {
        console.log(res);
    });


// --- Завдання 4 ---
function sortArray(array) {
    return new Promise((resolve, reject) => {
        if (array.length === 0) {
            reject("Масив порожній");
        } else {
            setTimeout(() => {
                const sorted = [...array].sort((a, b) => a - b);
                resolve(sorted);
            }, 2000);
        }
    });
}

console.log("\nЗавдання 4 (чекай виводу...):");
sortArray([9, 2, 5, 1, 8])
    .then(result => console.log("Завдання 4 (успіх):", result))
    .catch(error => console.error("Завдання 4 (помилка):", error));

sortArray([])
    .then(result => console.log("Завдання 4 (успіх):", result))
    .catch(error => console.error("Завдання 4 (помилка):", error));


// --- Завдання 5 ---
function multiplyAsync(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject("Некоректні значення");
        } else {
            setTimeout(() => resolve(a * b), 2000);
        }
    });
}


// --- Завдання 6 ---
function sortArrayAsync(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array) || array.length === 0) {
            reject("Масив порожній");
        } else {
            setTimeout(() => {
                const sorted = [...array].sort((a, b) => a - b);
                resolve(sorted);
            }, 2000);
        }
    });
}


// --- Функція main для 5 та 6 завдань ---
async function main() {
    try {
        console.log("\nВиконується Завдання 5...");
        const multResult = await multiplyAsync(6, 9);
        console.log("Результат множення (6 * 9):", multResult);
        
        console.log("\nВиконується Завдання 6...");
        const sortedResult = await sortArrayAsync([10, 3, 8, 1, 5]);
        console.log("Відсортований масив:", sortedResult);
        
        // Можеш розкоментувати, щоб побачити як працює обробка помилок
        // await multiplyAsync("6", 9); 
        // await sortArrayAsync([]);
    } catch (error) {
        console.error("Помилка у main:", error);
    }
}

// Виклик main (вона асинхронна і не блокує інші таски)
main();
