// Завдання 5
function multiplyAsync(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject("Некоректні значення");
        } else {
            setTimeout(() => {
                resolve(a * b);
            }, 2000);
        }
    });
}

// Завдання 6
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

// Загальна функція main()
async function main() {
    try {
        console.log("Завдання 5...");
        const multResult = await multiplyAsync(6, 9);
        console.log("Результат множення (6 * 9):", multResult);

        console.log("\nЗавдання 6...");
        const sortedResult = await sortArrayAsync([10, 3, 8, 1, 5]);
        console.log("Відсортований масив:", sortedResult);

        // Перевірка помилок (розкоментуй, щоб протестувати)
        // await multiplyAsync("6", 9); 
        // await sortArrayAsync([]);
    } catch (error) {
        console.error("Помилка:", error);
    }
}

main();
