/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  if (!str || str === " ") {
    return "";
  }

  const arr = str
    .replace(/\s{2,}/g, " ")
    .replace(/^\s|\s$/g, "")
    .toLowerCase()
    .split(" ");

  const result = arr.map((item) => item[0].toUpperCase() + item.slice(1));

  return result.join(" ");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё  простит")); // "Молодость Всё Простит"
